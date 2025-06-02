import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().describe("The callback handler's URL"),
  "publicKey": z.string().describe("The callback handler's public key").optional(),
  "cert": z.string().describe("The callback handler's certificate").optional()
}