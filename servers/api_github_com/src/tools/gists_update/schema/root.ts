import { z } from "zod"

export const inputParamsSchema = {
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "description": z.string().describe("The description of the gist.").optional(),
  "files": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `files` to the tool, first call the tool `expandSchema` with \"/properties/files\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The gist files to be updated, renamed, or deleted. Each `key` must match the current filename\n(including extension) of the targeted gist file. For example: `hello.py`.\n\nTo delete a file, set the whole file to null. For example: `hello.py : null`. The file will also be\ndeleted if the specified object does not contain at least one of `content` or `filename`.</property-description>").optional()
}