'use client';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import Link from 'next/link';
function DataFetching() {
  return (
    <Layout>
      <ul>
        <li>
          <Link href={'/old-next/csr'}>CSR</Link>
        </li>
        <li>
          <Link href={'/old-next/ssr'}>SSR</Link>
        </li>
        <li>
          <Link href={'/old-next/ssg'}>SSG</Link>
        </li>
        <li>
          <Link href={'/old-next/isr'}>ISR</Link>
        </li>
      </ul>
    </Layout>
  );
}

export default DataFetching;
