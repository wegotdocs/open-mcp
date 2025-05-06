import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("A descriptive name for the new key.").optional(),
  "armored_public_key": z.string().describe("A GPG key in ASCII-armored format.")
}