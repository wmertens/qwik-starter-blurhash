import { component$, useClientEffect$, useSignal, $ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
// fast-blurhash is slightly less precise, but much faster and a little smaller
// import { decode } from 'blurhash';
import { decodeBlurHash as decode } from 'fast-blurhash';
import { Wrapper, loading } from './blurhash.css';

export const renderHash = (canvas, hash, width, height) => {
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
  ratio?: string;
  eager?: boolean;
  className?: string;
}>((props) => {
  // The width and height are pre-stretching by style
  // Less pixels is faster but gives more blocky results
  const { width = 64, height = 64 } = props;
  const ref = useSignal<HTMLCanvasElement>();

  // // Render the blurhash when the element is visible on client
  useClientEffect$(
    ({ track }) => {
      const hash = track(() => props.hash);
      renderHash(ref.value, hash, width, height);
    },
    { eagerness: props.eager ? 'load' : 'visible' }
  );

  return (
    <canvas
      // className={props.className}
      // We always fill the container and retain our aspect ratio
      style={{ width: '100%', aspectRatio: props.ratio || '3/2' }}
      width={width}
      height={height}
      ref={ref}
    />
  );
});

// Stolen from fast-blurhash
export const digit =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~';
export const decode83 = (str, start, end) => {
  let value = 0;
  while (start < end) {
    value *= 83;
    value += digit.indexOf(str[start++]);
  }
  return value;
};
export const calcAverageRGB = (blurHash) => {
  let value = decode83(blurHash, 2, 6);
  const r = value >> 16;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgb(${r},${g},${b})`;
};

export const BlurHashImg = component$<{
  // Can't get PropsOf<BlurHash> to work
  hash: string;
  width?: number;
  height?: number;
  ratio?: string;
  src?: string;
  eager?: boolean;
}>((props) => {
  const avg = calcAverageRGB(props.hash);
  const ratio = useSignal(props.ratio);
  const imgRef = useSignal<HTMLImageElement>();
  // 0: wait, 1: eager ssr, 5: blur, 7: error, 8: unblur, 9: done
  const state = useSignal(props.eager ? 1 : 0);

  const onLoad = $((img) => {
    console.log('loaded', state.value);
    if (img.height)
      ratio.value =
        img.width / img.height((state.value = state.value > 4 ? 8 : 8));
  });
  useClientEffect$(
    () => {
      if (!state.value) state.value = 1;
      // give img a short time to load from cache
      else
        setTimeout(async () => {
          if (state.value < 7) {
            // load doesn't fire if already loaded
            const img = imgRef.value;
            if (img?.complete) {
              if (img.width) await onLoad(img);
              else state.value = 7;
            } else state.value = 5;
          }
        }, 10);
    },
    { eagerness: props.eager ? 'load' : 'visible' }
  );

  if (state.value === 8) {
    // remove blur when no longer needed
    setTimeout(() => (state.value = 9), 2000);
  }

  return (
    <>
      {state.value}
      <Wrapper style={{ '--ratio': ratio.value, '--avg': avg }}>
        {state.value > 4 && state.value < 9 && <BlurHash {...props} />}
        {state.value > 0 && (
          <img
            key={1}
            ref={imgRef}
            src={props.src}
            class={!isServer && state.value < 9 && loading}
            onLoad$={onLoad}
            onError$={() => (state.value = 7)}
          />
        )}
        {isServer && !props.eager && (
          // Must write html ourselves or Qwik crashes https://github.com/BuilderIO/qwik/issues/2024
          <noscript dangerouslySetInnerHTML={`<img src="${props.src}" />`} />
        )}
      </Wrapper>
    </>
  );
});
