import Link from 'next/link';
import React from 'react';

export default function Memebers() {
  return (
    <div>
      <h3 className='text-3xl'>This will be a memebers page</h3>
      <Link href='/'>Go home</Link>
    </div>
  );
}
