'use client';
import React, { useEffect, useState } from 'react';

function ClientComp() {
  const [title, setTitle] = useState('');
  useEffect(() => {
    setTitle('Title');
  }, []);
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setTitle(`${title} Tambah`)}>Add Title</button>
    </div>
  );
}

export default ClientComp;
