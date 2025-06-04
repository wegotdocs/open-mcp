import { z } from "zod"

export const inputParamsSchema = {
  "address": z.string().describe("Address of the business\nMaximum of 256 characters").optional(),
  "description": z.string().describe("Description of the business\nMaximum of 256 characters").optional(),
  "email": z.string().describe("Email address to contact the business\nMaximum of 128 characters").optional(),
  "hours": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `hours` to the tool, first call the tool `expandSchema` with \"/properties/hours\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "websites": z.array(z.string()).describe("URLs associated with business (e.g., website, Facebook page, Instagram)\nMaximum of 2 websites with a maximum of 256 characters each").optional()
}