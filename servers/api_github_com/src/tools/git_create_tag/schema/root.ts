import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "tag": z.string().describe("The tag's name. This is typically a version (e.g., \"v0.0.1\")."),
  "message": z.string().describe("The tag message."),
  "object": z.string().describe("The SHA of the git object this is tagging."),
  "type": z.enum(["commit","tree","blob"]).describe("The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`."),
  "tagger": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `tagger` to the tool, first call the tool `expandSchema` with \"/properties/tagger\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An object with information about the individual creating the tag.</property-description>").optional()
}