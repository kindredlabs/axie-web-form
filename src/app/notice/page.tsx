
import React from 'react'
import Image from 'next/image';
import BottomBar from "../components/BottomBar"
import Button from '../components/Button';
import { FaXTwitter, FaDiscord, FaArrowLeft } from "react-icons/fa6";
import Link from 'next/link';

export default function AxieForm() {
  return (
    <div className="absolute flex inset-0 bg-no-repeat bg-cover bg-axie overflow-y-scroll md:overflow-clip items-center from-[#4bd4fe] to-[#80d458]">
      {/* back arrow */}
      <Link href={'/form'} className='absolute cursor-pointer z-10 top-5 left-5 hover:scale-110 duration-500'>
        <FaArrowLeft className='size-8 md:size-12' />
      </Link>

      {/* main content */}
      <div className="relative h-fit md:h-full px-10 flex w-full flex-col items-center justify-center">
        <div className='flex flex-col gap-10 md:p-12 md:flex-row self-center'>

          {/* main title */}
          <div className='text-center md:w-[32rem] flex flex-col'>
            <h1 className="py-8 text-4xl font-bold px-4 md:px-0 ">
              Thank You For Signing Up
            </h1>
            <p >
              You're almost there!
            </p>
            <br />
            <p>
              Due to high demand, only a few will be
              selected. We will email the chosen ones
              soon, so keep an eye on your inbox!
            </p>
            <br />
            <p className='pb-8'>
              If you have any questions, feel free to
              contact us at <a href="mailto:hey@metapals.ai" className='font-semibold text-[#24e5ff]'>hey@metapals.ai</a>
            </p>
            <div>
              <Button externalLink="https://discord.gg/metapals">
                <p className='px-4 py-1'>Find Out More</p>

              </Button>
            </div>

            {/* socials */}
            <div className='hidden justify-center h-fit pt-6 md:flex gap-4 w-full flex-row'>
              <Link target='_blank' href={"https://discord.gg/metapals"}>
                <FaDiscord size={24} />
              </Link>
              <Link target='_blank' href={"https://x.com/MetaPals"}>
                <FaXTwitter size={20} />
              </Link>
            </div>

            {/* axie pic */}
            <Image
              alt='axie pic'
              src={'/Axie_1.png'}
              height={100}
              width={100}
              className='pt-6 w-36 -ml-8 hidden md:block'
            />
          </div>
        </div>

        {/* socials */}
        <div className='h-fit md:hidden pt-6 flex gap-4 w-full justify-center flex-row'>
          <Link target='_blank' href={"https://discord.gg/metapals"}>
            <FaDiscord size={24} />
          </Link>
          <Link target='_blank' href={"https://x.com/MetaPals"}>
            <FaXTwitter size={20} />
          </Link>
        </div>

        {/* Axie pic */}
        <Image
          alt='axie pic'
          src={'/Axie_1.png'}
          height={100}
          width={100}
          className='w-24 pt-12 self-start -ml-8 md:hidden block'
        />

        {/* sticky bottom bar for mobile */}
        {/* <div className='sticky md:hidden bottom-0 w-screen
        '>
          <BottomBar />
        </div> */}

      </div >

      {/* bottom bar for desktop */}
      <div >
        <BottomBar />
      </div>
    </div >
  )
}

