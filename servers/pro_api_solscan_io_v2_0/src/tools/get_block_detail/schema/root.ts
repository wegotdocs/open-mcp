import { z } from "zod"

export const inputParamsSchema = {
  "block": z.number().int().describe("Block number")
}