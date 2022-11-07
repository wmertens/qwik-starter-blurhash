import {
  component$,
  useClientEffect$,
  useSignal,
  useStyles$,
} from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
// fast-blurhash is slightly less precise, but much faster and a little smaller
// import { decode } from 'blurhash';
import { decodeBlurHash as decode } from 'fast-blurhash';

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
export const d = 3294.6;
export const e = 269.025;
export const sRGBToRGB = (value) =>
  Math.round(
    (value > 10.31475 ? Math.pow(value / e + 0.052132, 2.4) : value / d) * 255
  );
export const calcAverageRGB = (blurHash) => {
  let value = decode83(blurHash, 2, 6);
  const r = sRGBToRGB(value >> 16);
  const g = sRGBToRGB((value >> 8) & 255);
  const b = sRGBToRGB(value & 255);
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
  useStyles$(`
    .wrapper { width: 100%; position: relative; overflow: hidden; 
    aspect-ratio: var(--ratio, 3/2); background-color: var(--avg); }
    .wrapper img { width: 100%; filter: blur(0); transition: filter .05s; }
    .wrapper canvas { width: 100%; position: absolute; top: 0; left: 0; }
    .wrapper .load { filter: blur(16px); }
  `);
  const loadState = useSignal(isServer ? 0 : 1);

  useClientEffect$(() => {
    if (loadState.value === 0) loadState.value = 1;
  });
  let avg;
  if (isServer) {
    avg = calcAverageRGB(props.hash);
  }

  return (
    <div class="wrapper" style={{ '--ratio': props.ratio, '--avg': avg }}>
      {props.eager ||
        (loadState.value > 0 && (
          <img
            src={props.src}
            class={loadState.value != 2 && 'load'}
            onLoad$={() => (loadState.value = 2)}
          />
        ))}
      {loadState.value < 2 && <BlurHash {...props} />}
      {isServer && !props.eager && (
        // Must write html ourselves or Qwik crashes https://github.com/BuilderIO/qwik/issues/2024
        <noscript dangerouslySetInnerHTML={`<img src="${props.src}" />`} />
      )}
    </div>
  );
});
