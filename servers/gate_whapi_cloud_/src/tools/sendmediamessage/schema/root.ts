import { z } from "zod"

export const inputParamsSchema = {
  "MediaMessageType": z.enum(["image","video","gif","audio","voice","document","sticker"]).describe("Media message type"),
  "SendParams": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `SendParams` to the tool, first call the tool `expandSchema` with \"/properties/SendParams\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Send sender parameters via query</property-description>"),
  "no_encode": z.boolean().describe("Do not use our encoding").optional(),
  "media": z.union([z.string().base64().describe("File to upload"), z.string().describe("Media file URL for upload"), z.string().describe("Base64 encoded file to upload")]).optional()
}