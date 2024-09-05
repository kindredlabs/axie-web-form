"use server"
import { URL_AXIE_FORM } from "@/app/urls"

interface axieFormInterface {
  name: string
  email: string
  roninWalletAddress: string
  xUsername: string
  discordUsername: string
}

export async function AxieSendForm({
  name,
  email,
  roninWalletAddress,
  xUsername,
  discordUsername,
}: axieFormInterface) {
  try {
    const res = await fetch(URL_AXIE_FORM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-platform": "sanctuary",
      },
      body: JSON.stringify({
        name,
        email,
        roninWalletAddress,
        xUsername,
        discordUsername,
      }),
    })
    const data = await res.json()
    console.log("AXIE SERVER", data)
    return data
  } catch (e) {
    console.log("AXIE SERVER ERROR", e)
    return e
  }
}
