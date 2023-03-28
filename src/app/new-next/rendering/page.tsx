import React from 'react';
import Link from 'next/link';
import { url } from '@/constants/url';

function Rendering() {
  return (
    <section style={{ backgroundColor: 'pink', padding: '10px' }}>
      <div>
        <h1>Server & Client Component</h1>
        <ul>
          <li>
            <Link href={url['new-next'].rendering.client}>Client Compoent</Link>
          </li>
          <li>
            <Link href={url['new-next'].rendering.server}>Server Compoent</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>Static & Dynamic render</h1>
      </div>
    </section>
  );
}

export default Rendering;
