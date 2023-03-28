import React, { useState, useEffect } from 'react';
interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
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
    <>
      <main>{children}</main>
      <footer>{ctime}</footer>
    </>
  );
}

export default Layout;
