"use client"
import React from "react"
import Image from "next/image"
import Button from "../components/Button"
import BottomBar from "../components/BottomBar"
import Link from "next/link"
import { URL_EXTENSION_STORE } from "../urls"

export default function AxieHome() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-mobile from-[#4bd4fe] to-[#80d458] bg-cover bg-center bg-no-repeat md:bg-axie">
      {/* main content */}
      <div className="absolute flex w-full flex-col items-center justify-center self-center pb-24">
        {/* axie logo */}
        <Image
          alt=""
          height={300}
          width={300}
          className="md:w-90 w-64 pb-10"
          src={"/Axie_Logo.webp"}
          draggable={false}
        />

        {/* buttons */}
        <div className="flex aspect-video w-80 flex-col items-center gap-2 rounded-xl border-4 border-white bg-white/75 p-2 text-center text-black md:w-[30rem] md:p-6">
          <p className="text-2xl font-bold">
            Meet your Axie Companion with MetaPals!
          </p>
          <p className="pb-2 px-2 text-sm font-medium md:px-4">
            Sign up for a chance to be an early adopter of the Axie digital
            companion!
          </p>
          <Button link="/form">
            <p className="px-4 py-1 text-lg font-bold">Be an Early Adopter</p>
          </Button>
          <p className="pt-2 text-sm md:text-base">
            Don't have MetaPals extension?
          </p>
          <Link href={URL_EXTENSION_STORE}>
            <p className="text-sm font-semibold text-[#5339D6] underline">
              Download here
            </p>
          </Link>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
