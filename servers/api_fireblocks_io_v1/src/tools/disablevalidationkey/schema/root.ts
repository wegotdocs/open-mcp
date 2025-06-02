import { z } from "zod"

export const inputParamsSchema = {
  "keyId": z.string().describe("The unique identifier for the validation key provided by Fireblocks"),
  "enabled": z.boolean().describe("Disable validation key")
}