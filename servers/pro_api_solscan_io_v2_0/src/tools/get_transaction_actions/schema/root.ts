import { z } from "zod"

export const inputParamsSchema = {
  "tx": z.string().describe("Transaction signature")
}