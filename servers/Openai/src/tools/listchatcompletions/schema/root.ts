import { z } from "zod"

export const inputParamsSchema = {
  "model": z.string().describe("The model used to generate the Chat Completions.").optional(),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n</property-description>").optional(),
  "after": z.string().describe("Identifier for the last chat completion from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of Chat Completions to retrieve.").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order for Chat Completions by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`.").optional()
}