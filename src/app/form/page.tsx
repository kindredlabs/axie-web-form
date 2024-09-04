
import React from 'react'
import Image from 'next/image';
import BottomBar from "../components/BottomBar"
import Button from '../components/Button';
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

export default function AxieForm() {
  return (
    <div className="absolute flex inset-0 bg-no-repeat bg-cover bg-axie overflow-y-scroll md:overflow-clip from-[#4bd4fe] to-[#80d458]">
      {/* background img */}
      {/* <Image
        alt=""
        src={'/Axie_Main_BG3.jpg'}
        draggable={false}
        fill
        className="object-cover object-left-top"
        unoptimized
      /> */}

      {/* main content */}
      <div className="relative h-fit md:h-full px-10 flex w-full flex-col items-center justify-center">
        <div className='flex flex-col gap-10 md:p-12 md:flex-row self-center'>

          {/* main title */}
          <div className='text-center md:text-left flex flex-col'>
            <h1 className="py-8 text-4xl font-bold px-4 md:px-0 ">
              Be an Early Adopter of Axie Companions!
            </h1>
            <p >
              Make your free time more fun with
              MetaPals! Our Axie companions are
              here to keep you company. Sign up
              today for a chance to get early
              access!
            </p>
            <br />
            <p className='text-sm font-semibold'>
              *Selected users will be notified by email.
            </p>
            <br />

            {/* socials */}
            <div className='hidden h-fit pt-6 md:flex gap-4 w-full flex-row'>
              <FaDiscord size={20} />
              <FaXTwitter size={20} />
            </div>

            {/* axie pic */}
            <Image
              alt='axie pic'
              src={'/Axie_1.png'}
              height={100}
              width={100}
              className='pt-12 w-48 -ml-8 hidden md:block'
            />
          </div>

          <form className='bg-white md:mt-10 flex h-fit flex-col gap-6 w-full p-6 rounded-xl text-black '>

            <p className='text-xl font-bold'>
              Form Submission
            </p>

            <div className='flex flex-col md:flex-row gap-4'>
              <input placeholder='Name*' type='text' className='border-b-2 border-b-gray-300 rounded-sm p-2 w-full ' />
              <input placeholder='Email*' type='email' className='border-b-2 border-b-gray-300 rounded-sm p-2 w-full ' />
            </div>

            <input placeholder='Ronin Wallet Address*' type='text' className='border-b-2 border-b-gray-300 rounded-sm p-2 w-full ' />

            <div className='flex flex-col md:flex-row gap-4'>
              <input placeholder='Discord Username*' type='text' className='border-b-2 border-b-gray-300 rounded-sm p-2 w-full ' />
              <input placeholder='X Username*' type='text' className='border-b-2 border-b-gray-300 rounded-sm p-2 w-full ' />
            </div>

            <div className='w-full pt-4 flex justify-center md:justify-start'>
              <Button>
                <p className='px-6 py-1'>
                  Submit
                </p>
              </Button>
            </div>
            <div>
            </div>
          </form>
        </div>

        {/* socials */}
        <div className='h-fit md:hidden pt-6 flex gap-4 w-full justify-center flex-row'>
          <FaDiscord size={20} />
          <FaXTwitter size={20} />
        </div>

        {/* Axie pic */}
        <Image
          alt='axie pic'
          src={'/Axie_1.png'}
          height={100}
          width={100}
          className='w-24 self-start -ml-8 md:hidden block'
        />

        {/* spacer */}
        <div className='block h-[15dvh] w-full'>

        </div>

        {/* sticky bottom bar for mobile */}
        <div className='sticky md:hidden bottom-0 w-screen
        '>
          <BottomBar />
        </div>

      </div >

      {/* bottom bar for desktop */}
      <div className='hidden md:block'>
        <BottomBar />
      </div>
    </div >
  )
}

