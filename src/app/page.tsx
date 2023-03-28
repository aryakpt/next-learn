import React from 'react';
import Link from 'next/link';
import { url } from '@/constants/url';

export default function Home() {
  return (
    <section>
      <div>
        <h2>Next Versi &lt; 13</h2>
        <div>
          <Link href={url['old-next'].index}>Go to &lt; 13</Link>
        </div>
      </div>
      <div>
        <h2>Next Versi &ge; 13</h2>
        <div>
          <Link href={url['new-next'].index}>Go to &ge; 13</Link>
        </div>
      </div>
    </section>
  );
}
