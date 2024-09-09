import React from "react"
import Image from "next/image"
import BottomBar from "../components/BottomBar"
import Button from "../components/Button"
import {
  FaXTwitter,
  FaDiscord,
  FaArrowLeftLong,
  FaYoutube,
} from "react-icons/fa6"
import Link from "next/link"
import { URL_DISCORD, URL_TWITTER, URL_YOUTUBE_METAPALS } from "../urls"

export default function AxieForm() {
  return (
    <div className="absolute inset-0 flex items-center overflow-y-scroll bg-mobile from-[#4bd4fe] to-[#80d458] bg-cover bg-center bg-no-repeat md:overflow-clip md:bg-main">
      {/* back arrow */}
      <Link
        href={"/form"}
        className="absolute left-5 top-5 z-10 cursor-pointer duration-500 hover:scale-110 md:left-[10dvw] md:top-[10dvh]"
      >
        <FaArrowLeftLong className="size-8 md:size-12" />
      </Link>

      {/* main content */}
      <div className="relative flex h-fit w-full flex-col items-center justify-center px-10 pb-[5dvh] md:h-full md:pb-[10dvh]">
        <div className="flex flex-col gap-10 self-center md:flex-row md:p-12">
          {/* main title */}
          <div className="flex flex-col text-center md:w-[32rem]">
            <h1 className="px-4 py-8 text-4xl font-bold md:px-0">
              Thank you for signing Up
            </h1>
            <p>You're almost there!</p>
            <br />
            <p>
              Due to limited slots, only a few creators and community members
              will be selected in this round. We will email the chosen ones
              soon, so keep an eye on your inbox!
            </p>
            <br />
            <p className="pb-8">
              If you have any questions, feel free to contact us at{" "}
              <a
                href="mailto:hey@metapals.ai"
                className="font-semibold text-[#24e5ff]"
              >
                hey@metapals.ai
              </a>
            </p>

            <div>
              <p className="py-4 text-center font-semibold">
                Curious to know more? Watch our trailer here!
              </p>
              <Button theme={"axie_white"} externalLink={URL_YOUTUBE_METAPALS}>
                <div className="flex flex-row items-center px-2">
                  <FaYoutube size={20} />
                  <p className="px-2 py-1 font-bold">Watch Trailer</p>
                </div>
              </Button>
            </div>

            {/* socials */}
            <div className="hidden h-fit w-full flex-row justify-center gap-4 pt-6 md:flex">
              <Link target="_blank" href={URL_DISCORD}>
                <FaDiscord size={24} />
              </Link>
              <Link target="_blank" href={URL_TWITTER}>
                <FaXTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* socials */}
        <div className="flex h-fit w-full flex-row justify-center gap-4 pt-6 md:hidden">
          <Link target="_blank" href={URL_DISCORD}>
            <FaDiscord size={24} />
          </Link>
          <Link target="_blank" href={URL_TWITTER}>
            <FaXTwitter size={20} />
          </Link>
        </div>
      </div>
      {/* <BottomBar /> */}
    </div>
  )
}
