import { component$, useClientEffect$, useSignal, $ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
// fast-blurhash is slightly less precise, but much faster and a little smaller
// import { decode } from 'blurhash';
import {
  decodeBlurHash as decode,
  getBlurHashAverageColor,
} from 'fast-blurhash';
import { Wrapper, loading, Canvas } from './blurhash.css';

export const renderHash = (
  canvas: HTMLCanvasElement,
  hash: string,
  width: number,
  height: number
) => {
  if (!canvas) return;
  const pixels = decode(hash, width, height);
  const ctx = canvas.getContext('2d')!;
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
};

export const BlurHash = component$<{
  hash: string;
  width?: number;
  height?: number;
  eager?: boolean;
}>((props) => {
  // The width and height are pre-stretching by style
  // Less pixels is faster but gives more blocky results
  const { width = 64, height = 64 } = props;
  const ref = useSignal<HTMLCanvasElement>();

  // // Render the blurhash when the element is visible on client
  useClientEffect$(
    ({ track }) => {
      const hash = track(() => props.hash);
      renderHash(ref.value!, hash, width, height);
    },
    { eagerness: props.eager ? 'load' : 'visible' }
  );

  return <Canvas width={width} height={height} ref={ref} />;
});

export const getAverageRGB = (blurHash: string) => {
  const [r, g, b] = getBlurHashAverageColor(blurHash);
  return `rgb(${r},${g},${b})`;
};

export const BlurHashImg = component$<{
  // Can't get PropsOf<BlurHash> to work
  hash: string;
  width?: number;
  height?: number;
  ratio?: string | number;
  src?: string;
  eager?: boolean;
}>((props) => {
  const avg = getAverageRGB(props.hash);
  const ratio = useSignal(props.ratio || '3/2');
  const imgRef = useSignal<HTMLImageElement>();
  // 0: wait, 1: start, 5: blur, 7: error, 8: unblur, 9: done
  const state = useSignal(props.eager ? 1 : 0);

  // note the $() because we use it in $ functions
  const onLoad = $(() => {
    const img = imgRef.value!;
    if (img.height) ratio.value = img.width / img.height;
    // Skip unblur if not blurred
    state.value = state.value > 4 ? 8 : 9;
  });

  useClientEffect$(
    () => {
      if (!state.value) state.value = 1;
      // give img a short time to load from cache
      setTimeout(async () => {
        if (state.value < 7) {
          // load doesn't fire if already loaded
          const img = imgRef.value;
          if (img?.complete) {
            if (img.width) await onLoad();
            else state.value = 7;
          } else state.value = 5;
        }
      }, 10);
    },
    { eagerness: props.eager ? 'load' : 'visible' }
  );

  // Yes, you can just do state stuff inside render :-)
  if (state.value === 8) {
    // remove blur when no longer needed
    setTimeout(() => (state.value = 9), 2000);
  }

  return (
    <Wrapper style={{ '--ratio': ratio.value, '--avg': avg }}>
      {state.value > 4 && state.value < 9 && (
        <BlurHash hash={props.hash} eager={props.eager} />
      )}
      {state.value > 0 && (
        <img
          key={1}
          ref={imgRef}
          src={props.src}
          class={(!isServer && state.value < 8 && loading) || undefined}
          onLoad$={onLoad}
          onError$={() => (state.value = 7)}
        />
      )}
      {isServer && !props.eager && (
        // Must write html ourselves or Qwik crashes https://github.com/BuilderIO/qwik/issues/2024
        <noscript dangerouslySetInnerHTML={`<img src="${props.src}" />`} />
      )}
      State: {state.value}
    </Wrapper>
  );
});
