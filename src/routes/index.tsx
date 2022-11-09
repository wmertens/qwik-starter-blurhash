import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BlurHash, BlurHashImg } from '../components/blurhash';

export default component$(() => {
  const myHash = useSignal('LEHV6nWB2yk8pyo0adR*.7kCMdnj');
  return (
    <div>
      <h1>blurhash</h1>
      {/* <BlurHash hash={myHash.value} /> */}
      <p>
        Paste your own hash here:{' '}
        <input
          value={myHash.value}
          onInput$={(ev) =>
            (myHash.value = (ev.target as HTMLInputElement).value)
          }
        />
      </p>
      <BlurHashImg
        eager
        hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
        src="https://blurha.sh/12c2aca29ea896a628be.jpg"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Blurhash',
};
