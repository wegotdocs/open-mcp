import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().describe("A descriptive name for the new key.").optional(),
  "key": z.string().regex(new RegExp("^ssh-(rsa|dss|ed25519) |^ecdsa-sha2-nistp(256|384|521) ")).describe("The public SSH key to add to your GitHub account.")
}