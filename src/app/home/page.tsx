"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import Button from "../components/Button"
import BottomBar from "../components/BottomBar"
import Link from "next/link"
import { URL_EXTENSION_STORE } from "../urls"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export default function AxieHome() {
  const axieRefs = useRef<(HTMLImageElement | null)[]>([])

  useGSAP(() => {
    axieRefs.current.forEach((axie) => {
      if (!axie) return
      gsap.from(axie, {
        duration: getRandomNumber(1, 5),
        y: -1000,
        ease: getRandomChoice([
          "elastic.out(0.5, 0.3)",
          "circle",
          "back",
          "power1",
          "power4",
        ]),
      })
    })
  }, [])

  function getRandomNumber(start: number, end: number): number {
    return Math.floor(Math.random() * (start - end + 1)) + end
  }

  function getRandomChoice<T>(choices: T[]): T {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-y-hidden bg-mobile from-[#4bd4fe] to-[#80d458] bg-cover bg-center bg-no-repeat md:bg-main_plain">
      {/* main content */}
      <div className="absolute flex w-full flex-col items-center justify-center self-center pb-[20dvh]">
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
        <div className="relative flex aspect-video w-80 flex-col items-center gap-2 rounded-xl border-4 border-white bg-white/75 p-6 text-center text-sm text-[#333] md:w-[30rem] md:p-10 md:text-base">
          {/* Axie beasts */}
          {[
            "Axie_1.webp",
            "Axie_2.webp",
            "Axie_3.webp",
            "Axie_4.webp",
            "Axie_5.webp",
            "Axie_6.webp",
            "Axie_7.webp",
          ].map((src, index) => (
            <Image
              key={index}
              ref={(el) => {
                axieRefs.current[index] = el
              }}
              alt=""
              height={300}
              width={300}
              className={`absolute ${getAxieStyles(index)}`}
              src={`/${src}`}
              draggable={false}
            />
          ))}
          <p className="text-2xl font-bold text-[#10102B]">
            Bring your Axie to life with Axie Pals!
          </p>
          <p className="pb-2 font-medium md:px-4">
            Feed, pet, and raise Axie Pals from your browser!
          </p>
          <Button theme="axie_purple" link="/form">
            <p className="px-4 py-1 text-lg font-medium">
              Sign up for early access
            </p>
          </Button>
          {/* <p className="pt-2">Don't have MetaPals extension?</p>
          <Link href={URL_EXTENSION_STORE}>
            <p className="font-extrabold text-[#5339D6] underline">
              Download here
            </p>
          </Link> */}
        </div>
        <div className="flex w-full items-end justify-center gap-4 pt-10">
          <p className="font-medium italic text-white">Powered by</p>
          <Image
            width={80}
            height={80}
            alt={""}
            src={"/Axie_Pal_Logo.svg"}
            color="white"
            draggable={false}
          />
        </div>
      </div>
      {/* <BottomBar /> */}
    </div>
  )
}

function getAxieStyles(index: number) {
  switch (index) {
    case 0:
      return "z-10 hidden md:flex md:-left-[8rem] md:top-[12rem] md:w-56"
    case 1:
      return "z-10 hidden md:flex md:left-[27rem] md:top-[9rem] md:w-36"
    case 2:
      return "z-10 hidden md:flex md:left-[35rem] md:top-[20rem] md:w-24"
    case 3:
      return "z-10 hidden md:flex md:-top-[2rem] md:left-[32rem] md:w-28"
    case 4:
      return "z-10 hidden md:flex md:left-[16rem] md:top-[23rem] md:w-32"
    case 5:
      return "z-10 hidden md:flex md:-left-[13rem] md:top-[5rem] md:w-32"
    case 6:
      return "z-10 hidden md:flex md:-left-[8rem] md:-top-[10rem] md:w-48"
    default:
      return ""
  }
}
