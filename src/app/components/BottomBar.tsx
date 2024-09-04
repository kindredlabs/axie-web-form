"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Button from "./Button"
import Link from "next/link"

export default function () {
  return (
    <div
      className={
        "absolute inset-x-0 bottom-0 z-10 h-fit bg-white md:h-14 lg:h-24"
      }
    >
      <span
        className={
          "flex h-full flex-col items-center justify-between px-5 py-3 md:flex-row md:gap-5 md:py-1 lg:gap-0 lg:py-3"
        }
      >
        <div className={"flex items-center gap-3 lg:gap-6"}>
          <div className={"hidden size-8 md:block lg:size-14"}>
            <Image width={300} height={300} alt={""} src={'/metapals-icon.png'} draggable={false} />
          </div>
          <div className={"text-center md:text-left"}>
            <span className={"text-[#4a4d61]"}>
              <p
                className={
                  "text-xs font-medium uppercase leading-none tracking-wide lg:text-base"
                }
              >
                COUNTDOWN TO AXIE LAUNCH
              </p>
              {/* TODO: convert to unix time and pass target via props */}
              <Countdown />
            </span>
          </div>
        </div>
        <div
          className={
            "flex flex-col items-center gap-1 text-right md:flex-row md:gap-5"
          }
        >
          <div
            className={
              "flex flex-col-reverse items-end text-right text-[#1D2037] md:flex-col"
            }
          >
            <div className={"md:flex hidden"}>
              <p className={"w-[70dvw] text-xs md:w-auto md:text-base"}>
                Early adoption will be closed on September 12 (UTC 02:00)
              </p>
            </div>
            <p
              className={
                "text-center px-10 md:px-0 font-semibold md:text-right md:text-xl"
              }
            >
              Join our{" "}
              <span className={"text-[#5339D6] underline"}>

                <Link href={"https://discord.gg/metapals"}>Discord</Link>
              </span>
              {" "}
              to be part of Early Adopter list!
            </p>
          </div>

          {/*auth button*/}
          {/* <span className={"hidden md:block"}>
            <Button theme={"white"}>
              <div
                className={
                  "flex h-10 items-center justify-center px-8 font-bold tracking-widest lg:h-14 lg:px-11 lg:text-xl"
                }
              >
                SIGN
              </div>
            </Button>
          </span>
          <span className={"md:hidden"}>
            <button type={"button"}>
              <p className={"text-sm underline"}>SIGN</p>
            </button>
          </span> */}
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
    <div
      className={
        "text-lg font-bold leading-none tracking-wide lg:text-2xl py-2 md:py-0"
      }
    >
      {renderTime(dayLeft)} {dayLeft >= 2 ? "days" : "day"} :{" "}
      {renderTime(hourLeft)} {hourLeft >= 2 ? "hours" : "hour"} :{" "}
      {renderTime(minuteLeft)} {minuteLeft >= 2 ? "mins" : "min"} :{" "}
      {renderTime(secondLeft)} {secondLeft >= 2 ? "secs" : "sec"}
    </div>
  )
}