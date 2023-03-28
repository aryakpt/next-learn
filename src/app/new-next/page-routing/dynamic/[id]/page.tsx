import React from 'react';

type Params = {
  id: string | number;
};

interface Props {
  params: Params;
}

const Dynamic = ({ params }: Props) => {
  return <div>Dynamic Route: {params.id}</div>;
};

export default Dynamic;
