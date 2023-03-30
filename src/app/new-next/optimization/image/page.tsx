import React from 'react';
import Image from 'next/image';
function ImgOptimization() {
  return (
    <div>
      <div>
        <Image
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/images/ivysaur.jpg`}
          width={50}
          height={50}
          alt={'ivysaur'}
        />
        Coba
      </div>
      <br />
      <div>
        <img
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/images/ivysaur.jpg`}
          alt="ivysaur"
          width={50}
          height={50}
        />
        Cobaw
      </div>
    </div>
  );
}

export default ImgOptimization;
