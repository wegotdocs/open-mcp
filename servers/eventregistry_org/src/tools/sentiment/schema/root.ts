import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "text": z.string().describe("The text that will be used to calculate sentiment."),
  "sentences": z.number().int().describe("Number of sentences on which to compute the sentiment.").optional()
}