'use client';
import React, { useEffect } from 'react';

interface Props {
  error: Error;
  reset: () => void;
}
function ErrorRoot({ error, reset }: Props) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong! Hayo Kenapa?</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorRoot;
