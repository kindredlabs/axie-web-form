import React from 'react'
import Image from 'next/image';

export default function AxieForm() {
  return (
    <div
      className={
        "absolute flex items-center justify-center inset-0 bg-gradient-to-b from-[#4bd4fe] to-[#80d458]"
      }
    >
      <Image src={'Axie_Main_BG2.jpg'}
        draggable={false}
        fill
        className={"object-cover object-center"}
        unoptimized
      />
      <div className="relative text-3xl size-96 bg-red-300">
        <p>
          Thank you to everyone who registered! Axie
          companions will be distributed soon to all
          registered creators.
          Stay tuned for more updates and get ready to
          enjoy your new companions!
        </p>
      </div>

    </div>
  );
}

