import { z } from "zod"

export const inputParamsSchema = {
  "policy": z.string().describe("The authorization policy to check.")
}