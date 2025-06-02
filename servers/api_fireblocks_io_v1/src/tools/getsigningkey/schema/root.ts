import { z } from "zod"

export const inputParamsSchema = {
  "keyId": z.string().describe("The unique identifier for the signing key provided by Fireblocks")
}