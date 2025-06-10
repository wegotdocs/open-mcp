import { z } from "zod"

export const inputParamsSchema = {
  "item": z.string().describe("The item to remove from the portfolio.")
}