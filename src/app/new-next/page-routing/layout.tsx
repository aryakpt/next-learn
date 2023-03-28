import Link from 'next/link';
import { url } from '@/constants/url';

export default function PageRoutingLayout({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ background: 'yellow' }}>
      <header>
        <h2>Page Routing - Layout</h2>
      </header>
      <main>{children}</main>
      <footer>
        <Link href={url['new-next'].index}>Back to Next13</Link>
      </footer>
    </section>
  );
}
