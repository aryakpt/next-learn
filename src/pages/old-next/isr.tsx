import React from 'react';
import { apiGetWorldTime } from '@/services/worldtimeapi';
import Layout from '@/components/layout';

interface Props {
  time: any;
}

function ISR({ time }: Props) {
  return <Layout>Fetched - {time} </Layout>;
}

export async function getStaticProps() {
  // Fetch data from external API
  const response: any = await apiGetWorldTime();
  const time = new Date(response?.datetime).toLocaleTimeString('en-US', {
    hour12: false,
  });
  // Pass data to the page via props
  return { props: { time }, revalidate: 10 };
}

export default ISR;
