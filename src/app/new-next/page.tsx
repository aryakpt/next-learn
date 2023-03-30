import React from 'react';
import Link from 'next/link';
import { url } from '@/constants/url';

function NewNext() {
  return (
    <div>
      <ol>
        <li>
          <ul>
            <li>
              <Link href={url['new-next'].routing.link}>Page Routing - Using Link Component</Link>
            </li>
            <li>
              <a href={url['new-next'].routing['a-tag']}>Page Routing - Using Tag a</a>
            </li>
            <li>
              <p>Dynamic Route</p>
              <ul>
                <li>
                  <Link href={`${url['new-next'].routing.dynamic}/1`}>
                    Dynamic Route - Params = 1
                  </Link>
                </li>
                <li>
                  <Link href={`${url['new-next'].routing.dynamic}/2`}>
                    Dynamic Route - Params = 2
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href={url['new-next'].rendering.index}>Rendering</Link>
        </li>
        <li>
          <Link href={'/new-next/data-fetching'}>Data Fetching</Link>
        </li>
        <li>
          <Link href={'/new-next/optimization/image'}>Image Optimization</Link>
        </li>
      </ol>
    </div>
  );
}

export default NewNext;
