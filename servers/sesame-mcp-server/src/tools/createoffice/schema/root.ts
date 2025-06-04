import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string().uuid().describe("The ID of the company"),
  "name": z.string().describe("The name of the office"),
  "address": z.string().describe("The address of the office").optional(),
  "coordinates": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `coordinates` to the tool, first call the tool `expandSchema` with \"/properties/coordinates\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The coordinates of the office</property-description>").optional(),
  "description": z.string().describe("The description of the office").optional(),
  "radio": z.number().int().describe("The radio of the office").optional()
}