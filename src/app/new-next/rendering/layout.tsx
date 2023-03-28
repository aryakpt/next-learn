import { url } from '@/constants/url';
import Link from 'next/link';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

function LayoutRendering({ children }: Props) {
  return (
    <section>
      {children}
      <Link href={url['new-next'].rendering.index}>Back to rendering page</Link>
    </section>
  );
}

export default LayoutRendering;
