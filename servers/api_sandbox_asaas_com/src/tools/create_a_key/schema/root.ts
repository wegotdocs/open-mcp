import { z } from "zod"

export const inputParamsSchema = {
  "type": z.literal("EVP").describe("Pix key type")
}