"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Button from "./Button"
import Link from "next/link"

export default function () {
  return (
    <div
      className={
        "md:bg-bottom_bar fixed bottom-0 z-10 h-fit w-full bg-white bg-cover bg-center bg-no-repeat md:h-14 md:bg-transparent lg:h-32"
      }
    >
      {/* <Image src={"/Axie_Bottom_BG.png"} fill /> */}
      <span
        className={
          "flex h-full flex-col items-center justify-between gap-2 px-5 py-3 md:flex-row md:gap-5 md:py-1 lg:gap-0 lg:py-3"
        }
      >
        {/* left / highest part */}
        <div className="hidden size-24 items-end gap-4 md:flex md:w-1/3">
          <p className="font-medium italic text-black">Powered by</p>
          <Image
            width={80}
            height={80}
            alt={""}
            src={"/Axie_Pal_Logo.svg"}
            draggable={false}
          />
        </div>

        {/* middle part */}
        <div
          className={
            "flex w-full flex-col items-center justify-center gap-3 md:w-1/3"
          }
        >
          <p
            className={
              "text-xs font-medium uppercase leading-none tracking-wide text-[#787878] md:text-base"
            }
          >
            COUNTDOWN TO AXIE LAUNCH
          </p>
          {/* TODO: convert to unix time and pass target via props */}
          <Countdown />
        </div>

        {/* right / lowest part */}
        <div
          className={
            "flex w-full flex-col items-center justify-center text-[#1D2037] md:mt-12 md:w-1/3 md:items-end"
          }
        >
          <p
            className={"hidden text-right text-xs md:flex md:w-auto md:text-sm"}
          >
            Early access will be closed on September 12 (UTC 02:00)
          </p>
          <p className={"text-right text-sm font-semibold md:text-base"}>
            Join our{" "}
            <span className={"text-[#5339D6] underline"}>
              <Link href={"https://discord.gg/metapals"}>Discord</Link>
            </span>{" "}
            for news and updates!
          </p>
        </div>
      </span>
    </div>
  )
}

function Countdown() {
  const [dayLeft, setDayLeft] = useState(0)
  const [hourLeft, setHourLeft] = useState(0)
  const [minuteLeft, setMinuteLeft] = useState(0)
  const [secondLeft, setSecondLeft] = useState(0)

  // Set the target date and time
  const targetDate = new Date(Date.UTC(2024, 8, 17, 2, 0, 0))

  // targetDate.setHours(19)
  // YYYY-MM-DDTHH:mm:ss.sssZ

  // Update the _countdown every second
  const intervalId = setInterval(() => {
    // Get the current date and time
    const today = new Date()

    // Find the distance between now and the target date
    const distance = targetDate.getTime() - today.getTime()

    // Time calculations for days, hours, minutes and seconds
    setDayLeft(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHourLeft(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    )
    setMinuteLeft(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSecondLeft(Math.floor((distance % (1000 * 60)) / 1000))

    // If the _countdown is finished, stop the interval
    if (distance < 0) {
      clearInterval(intervalId)
    }
  }, 1000)

  useEffect(() => {
    return () => {
      clearInterval(intervalId)
    }
  })

  function renderTime(time: number) {
    if (time.toString().length === 1) {
      return `0${time}`
    } else {
      return time
    }
  }

  return (
    <div className="rounded-md bg-gradient-to-r from-[#24E5FF]/15 via-[#9E6CE0]/15 to-[#F988FF]/15 px-4 py-3">
      <div
        className={
          "bg-gradient-to-r from-[#24E5FF] via-[#9E6CE0] to-[#F988FF] bg-clip-text text-lg font-bold leading-none tracking-wide text-transparent lg:text-4xl"
        }
      >
        <p className="block md:hidden">
          {renderTime(dayLeft)} {dayLeft >= 2 ? "days" : "day"} :{" "}
          {renderTime(hourLeft)} {hourLeft >= 2 ? "hours" : "hour"} :{" "}
          {renderTime(minuteLeft)} {minuteLeft >= 2 ? "mins" : "min"} :{" "}
          {renderTime(secondLeft)} {secondLeft >= 2 ? "secs" : "sec"}
        </p>
        <p className="hidden md:block">
          {renderTime(dayLeft)} {"d"} : {renderTime(hourLeft)} {"h"} :{" "}
          {renderTime(minuteLeft)} {"m"} : {renderTime(secondLeft)} {"s"}
        </p>
      </div>
    </div>
  )
}
