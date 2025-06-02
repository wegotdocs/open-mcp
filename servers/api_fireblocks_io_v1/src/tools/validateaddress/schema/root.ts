import { z } from "zod"

export const inputParamsSchema = {
  "assetId": z.string().describe("The asset of the address"),
  "address": z.string().describe("The address to validate")
}