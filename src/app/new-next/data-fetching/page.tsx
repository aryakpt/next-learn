import Link from 'next/link';
function DataFetching() {
  return (
    <div>
      <ul>
        <li>
          <Link href={'/new-next/data-fetching/csr'}>CSR</Link>
        </li>
        <li>
          <Link href={'/new-next/data-fetching/ssr'}>SSR</Link>
        </li>
        <li>
          <Link href={'/new-next/data-fetching/ssg'}>SSG</Link>
        </li>
        <li>
          <Link href={'/new-next/data-fetching/isr'}>ISR</Link>
        </li>
      </ul>
    </div>
  );
}

export default DataFetching;
