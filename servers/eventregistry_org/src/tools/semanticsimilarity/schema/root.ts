import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "text1": z.string().describe("The first text that'll be used in the comparison."),
  "text2": z.string().describe("The second text that'll be used in the comparison.")
}