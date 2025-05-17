import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "text": z.string().describe("Define a text that you'll like to see categorized."),
  "taxonomy": z.enum(["dmoz","news"]).describe("Define the taxonomy in which you'll want to categorize the selected text")
}