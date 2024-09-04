"use client"
import React from "react"
import Image from "next/image"
import Button from "../components/Button"
import BottomBar from "../components/BottomBar"
import Link from "next/link"

export default function AxieHome() {
  return (
    <div className="absolute flex items-center justify-center inset-0 bg-gradient-to-b from-[#4bd4fe] to-[#80d458]">
      {/* background img */}
      <Image
        alt=""
        src={'/Axie_Main_BG3.jpg'}
        draggable={false}
        fill
        className="object-cover object-left-top"
        unoptimized
      />

      {/* main content */}
      <div className="absolute self-center flex w-full flex-col items-center justify-center pb-24">
        {/* axie logo */}
        <Image
          alt=""
          height={300}
          width={300}
          className="w-72 md:w-90"
          src={'/Axie_logo.png'}
          draggable={false}
        />
        <h1 className="pb-8 text-2xl font-bold px-12 md:px-0 text-center">
          THE OFFICIAL AXIE COMPANIONS
        </h1>

        {/* buttons */}
        <div className="flex items-center aspect-video w-80 md:w-[30rem] bg-white/75 border-4 text-center text-black border-white flex-col gap-2 p-2 md:p-6 rounded-xl">
          <p className="font-bold text-2xl">
            Meet your Axie Companion with MetaPals!
          </p>
          <p className="md:px-4 font-medium pb-2">
            Sign up for a chance to be an early adopter of the Axie digital companion!
          </p>
          <Button>
            <p className="px-4 py-1 text-lg font-bold">
              Be an Early Adopter
            </p>
          </Button>
          <p className="pt-2 text-sm md:text-base">
            Curious about the Axie digital companion?
          </p>
          <Link href={"https://discord.gg/metapals"}>
            <p className="text-sm underline text-[#5339D6] font-semibold">
              Find Out More!
            </p>
          </Link>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
