import { z } from "zod"

export const inputParams = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "b_slug": z.string().regex(new RegExp("^[\\\\w-]+$")).max(64),
  "items": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `items` to the tool, first call the tool `expandSchema` with \"/properties/items\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}