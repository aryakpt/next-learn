import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Counter from '@/components/Counter';

const OldNext = () => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    setTitle('Title using State');
  }, []);
  return (
    <div>
      <div>
        <h1>
          Ini merupakan page menggunakan routing miliki <b>Next versi &lt; 13</b>
        </h1>
        <h3>{title}</h3>
      </div>
      <Counter />
      <br />
      <Link href={'/old-next/data-fetching'}>Data Fetching</Link>
    </div>
  );
};

export default OldNext;
