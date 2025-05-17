import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "url": z.string().describe("Define an article URL, that'll be used to extract the article information.")
}