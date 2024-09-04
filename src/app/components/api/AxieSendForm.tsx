"use server"

interface axieFormInterface {
  name: "string"
  email: "string"
  roninWalletAddress: "string"
  xUsername: "string"
  discordUsername: "string"
}

export async function AxieSendForm({
  name,
  email,
  roninWalletAddress,
  xUsername,
  discordUsername,
}: axieFormInterface) {
  const URL_AXIE_FORM =
    "https://dev.api.metapals.ai/api/v1/sanctuary/axie-early-access"
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
