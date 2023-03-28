'use client';
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout';
import { apiGetWorldTime } from '@/services/worldtimeapi';

function CSR() {
  const [time, setTime] = useState<any>();

  const getWorldTime = async () => {
    const response: any = await apiGetWorldTime();
    const time = new Date(response.datetime).toLocaleTimeString('en-US', {
      hour12: false,
    });
    setTime(time);
  };

  useEffect(() => {
    getWorldTime();
  }, []);

  return (
    <Layout>
      <div>Fetched - {time ? time : 'loading'}</div>
    </Layout>
  );
}

export default CSR;
