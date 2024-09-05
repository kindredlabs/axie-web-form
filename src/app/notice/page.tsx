import React from "react"
import Image from "next/image"
import BottomBar from "../components/BottomBar"
import Button from "../components/Button"
import { FaXTwitter, FaDiscord, FaArrowLeft } from "react-icons/fa6"
import Link from "next/link"

export default function AxieForm() {
  return (
    <div className="absolute inset-0 flex items-center overflow-y-scroll bg-axie from-[#4bd4fe] to-[#80d458] bg-cover bg-no-repeat md:overflow-clip">
      {/* back arrow */}
      <Link
        href={"/form"}
        className="absolute left-5 top-5 z-10 cursor-pointer duration-500 hover:scale-110"
      >
        <FaArrowLeft className="size-8 md:size-12" />
      </Link>

      {/* main content */}
      <div className="relative flex h-fit w-full flex-col items-center justify-center px-10 md:h-full">
        <div className="flex flex-col gap-10 self-center md:flex-row md:p-12">
          {/* main title */}
          <div className="flex flex-col text-center md:w-[32rem]">
            <h1 className="px-4 py-8 text-4xl font-bold md:px-0">
              Thank You For Signing Up
            </h1>
            <p>You're almost there!</p>
            <br />
            <p>
              Due to high demand, only a few will be selected. We will email the
              chosen ones soon, so keep an eye on your inbox!
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
              <Button externalLink="https://discord.gg/metapals">
                <p className="px-4 py-1">Find Out More</p>
              </Button>
            </div>

            {/* socials */}
            <div className="hidden h-fit w-full flex-row justify-center gap-4 pt-6 md:flex">
              <Link target="_blank" href={"https://discord.gg/metapals"}>
                <FaDiscord size={24} />
              </Link>
              <Link target="_blank" href={"https://x.com/MetaPals"}>
                <FaXTwitter size={20} />
              </Link>
            </div>

            {/* axie pic */}
            <Image
              alt="axie pic"
              src={"/Axie_1.png"}
              height={100}
              width={100}
              className="-ml-8 hidden w-36 pt-6 md:block"
            />
          </div>
        </div>

        {/* socials */}
        <div className="flex h-fit w-full flex-row justify-center gap-4 pt-6 md:hidden">
          <Link target="_blank" href={"https://discord.gg/metapals"}>
            <FaDiscord size={24} />
          </Link>
          <Link target="_blank" href={"https://x.com/MetaPals"}>
            <FaXTwitter size={20} />
          </Link>
        </div>

        {/* Axie pic */}
        <Image
          alt="axie pic"
          src={"/Axie_1.png"}
          height={100}
          width={100}
          className="-ml-8 block w-24 self-start pt-12 md:hidden"
        />
      </div>
      <BottomBar />
    </div>
  )
}
