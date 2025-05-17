import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "text": z.string().describe("Define a text that'll be used to detect the language in which it's written.")
}