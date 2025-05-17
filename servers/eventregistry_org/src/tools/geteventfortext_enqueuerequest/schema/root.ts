import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "text": z.string().describe("Text for which to find the most related event"),
  "lang": z.string().describe("The language in which the provided `text` is."),
  "resultType": z.enum(["info","articles"]).describe("Choose what kind of information about the events should be returned. Default value: info.").optional()
}