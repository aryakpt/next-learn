'use client';
import React, { useEffect, useState } from 'react';

function LayoutDataFetching({ children }: { children: React.ReactNode }) {
  const [ctime, setTime] = useState<any>();

  const UpdateTime = () => {
    const time = new Date().toLocaleTimeString('en-US', {
      hour12: false,
    });
    setTime(time);
  };

  useEffect(() => {
    const timer = setInterval(UpdateTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div>{ctime}</div>
      <div>{children}</div>
    </section>
  );
}

export default LayoutDataFetching;
