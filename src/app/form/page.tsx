"use client"
import React from "react"
import Image from "next/image"
import BottomBar from "../components/BottomBar"
import Button from "../components/Button"
import { FaXTwitter, FaDiscord, FaArrowLeft } from "react-icons/fa6"
import Link from "next/link"
import z from "zod"
import { useState } from "react"
import { AxieSendForm } from "../components/api/AxieSendForm"

interface inputChangeType {
  target: { name: string; value: string }
}

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name is too short")
    .min(1, "Required field for submission."),
  email: z
    .string()
    .min(6, "Email is too short")
    .email("Please provide a valid email")
    .min(1, "Required field for submission."),
  roninWalletAddress: z.string().min(1, "Required field for submission"),
})

export default function AxieForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    roninWalletAddress: "",
    xUsername: "",
    discordUsername: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    roninWalletAddress: "",
    xUsername: "",
    discordUsername: "",
  })

  const handleInputChange = (event: inputChangeType) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async () => {
    setErrors({
      name: "",
      email: "",
      roninWalletAddress: "",
      xUsername: "",
      discordUsername: "",
    })

    try {
      console.log("AXIE FORM", form)
      formSchema.parse(form)
      const response = await AxieSendForm({
        name: form.name,
        email: form.email,
        roninWalletAddress: form.roninWalletAddress,
        xUsername: form.xUsername,
        discordUsername: form.discordUsername,
      })
      console.log(response)
      if (response.errors) {
        alert("Error! " + response.message)
        console.log("error message", response.message)
      }
      if (response.uid) {
        alert("Success!")
        setForm({
          name: "",
          email: "",
          roninWalletAddress: "",
          xUsername: "",
          discordUsername: "",
        })
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((item) => {
          if (item.path[0] === "name") {
            setErrors((prevErrors) => ({ ...prevErrors, name: item.message }))
          }
          if (item.path[0] === "email") {
            setErrors((prevErrors) => ({ ...prevErrors, email: item.message }))
          }
          if (item.path[0] === "roninWalletAddress") {
            setErrors((prevErrors) => ({
              ...prevErrors,
              roninWalletAddress: item.message,
            }))
          }
        })
      }
    }
  }

  return (
    <div className="absolute inset-0 flex overflow-y-scroll bg-axie from-[#4bd4fe] to-[#80d458] bg-cover bg-no-repeat md:overflow-clip">
      {/* back arrow */}
      <Link
        href={"/"}
        className="absolute left-5 top-5 z-10 cursor-pointer duration-500 hover:scale-110"
      >
        <FaArrowLeft className="size-8 md:size-12" />
      </Link>

      {/* main content */}
      <div className="relative flex h-fit w-full flex-col items-center justify-center px-10 md:h-full">
        <div className="flex flex-col gap-10 self-center md:flex-row md:p-12">
          {/* main title */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="px-4 pb-8 pt-16 text-4xl font-bold md:px-0">
              Be an Early Adopter of Axie Companions!
            </h1>
            <p>
              Make your free time more fun with MetaPals! Our Axie companions
              are here to keep you company. Sign up today for a chance to get
              early access!
            </p>
            <br />
            <p className="text-sm font-semibold">
              *Selected users will be notified by email.
            </p>
            <br />

            {/* socials */}
            <div className="hidden h-fit w-full flex-row gap-4 pt-6 md:flex">
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
              className="-ml-8 hidden w-40 pt-12 md:block"
            />
          </div>

          <form className="flex h-fit w-full flex-col gap-6 rounded-xl bg-white p-6 text-black md:mt-10">
            <p className="text-xl font-bold">Form Submission</p>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex w-1/2 flex-col">
                {/* Name Field */}
                <input
                  onChange={(e) =>
                    handleInputChange({
                      target: { name: "name", value: e.target.value },
                    })
                  }
                  placeholder="Name*"
                  value={form.name}
                  type="text"
                  className="w-full rounded-sm border-b-2 border-b-gray-300 p-2"
                />
                <p className={`h-2 text-center text-sm text-red-400`}>
                  {errors.name && errors.name}
                </p>
              </div>

              {/* Email Field */}
              <div className="flex w-1/2 flex-col">
                <input
                  onChange={(e) =>
                    handleInputChange({
                      target: { name: "email", value: e.target.value },
                    })
                  }
                  value={form.email}
                  placeholder="Email*"
                  type="email"
                  className="w-full rounded-sm border-b-2 border-b-gray-300 p-2"
                />
                <p className={`h-2 text-center text-sm text-red-400`}>
                  {errors.email && errors.email}
                </p>
              </div>
            </div>

            {/* Ronin Wallet Field */}
            <div className="flex w-full flex-col">
              <input
                onChange={(e) =>
                  handleInputChange({
                    target: {
                      name: "roninWalletAddress",
                      value: e.target.value,
                    },
                  })
                }
                value={form.roninWalletAddress}
                placeholder="Ronin Wallet Address*"
                type="text"
                className="w-full rounded-sm border-b-2 border-b-gray-300 p-2"
              />
              <p className={`h-2 text-center text-sm text-red-400`}>
                {errors.roninWalletAddress && errors.roninWalletAddress}
              </p>
            </div>

            {/* Discord Field */}
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex w-1/2 flex-col">
                <input
                  onChange={(e) =>
                    handleInputChange({
                      target: {
                        name: "discordUsername",
                        value: e.target.value,
                      },
                    })
                  }
                  value={form.discordUsername}
                  placeholder="Discord Username"
                  type="text"
                  className="w-full rounded-sm border-b-2 border-b-gray-300 p-2"
                />
                <p className={`h-2 text-center text-sm text-red-400`}>
                  {errors.discordUsername && errors.discordUsername}
                </p>
              </div>

              {/* X Field */}
              <div className="flex w-1/2 flex-col">
                <input
                  onChange={(e) =>
                    handleInputChange({
                      target: {
                        name: "xUsername",
                        value: e.target.value,
                      },
                    })
                  }
                  value={form.xUsername}
                  placeholder="X Username"
                  type="text"
                  className="w-full rounded-sm border-b-2 border-b-gray-300 p-2"
                />
                <p className={`h-2 text-center text-sm text-red-400`}>
                  {errors.xUsername && errors.xUsername}
                </p>
              </div>
            </div>

            <div className="flex w-full justify-center pt-4 md:justify-start">
              <Button onClick={() => handleSubmit()}>
                <p className="px-6 py-1">Submit</p>
              </Button>
            </div>
            <div></div>
          </form>
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
          className="-ml-8 block w-24 self-start md:hidden"
        />

        {/* spacer */}
        <div className="block h-[15dvh] w-full"></div>

        {/* sticky bottom bar for mobile */}
        <div className="sticky bottom-0 w-screen md:hidden">
          <BottomBar />
        </div>
      </div>

      {/* bottom bar for desktop */}
      <div className="hidden md:block">
        <BottomBar />
      </div>
    </div>
  )
}
