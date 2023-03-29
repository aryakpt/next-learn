import React from 'react';
import { apiGetWorldTime } from '@/services/api';
import Layout from '@/components/layout';

interface Props {
  time: any;
}

function SSG({ time }: Props) {
  return <Layout>Fetched - {time} </Layout>;
}

export async function getStaticProps() {
  // Fetch data from external API
  const response: any = await apiGetWorldTime();
  const time = new Date(response?.data?.datetime).toLocaleTimeString('en-US', {
    hour12: false,
  });
  // Pass data to the page via props
  return { props: { time } };
}

export default SSG;
