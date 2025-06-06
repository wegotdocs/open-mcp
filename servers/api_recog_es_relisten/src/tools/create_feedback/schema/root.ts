import { z } from "zod"

export const inputParamsSchema = {
  "resultid": z.string().describe("The result ID for which the feedback is related to."),
  "audio": z.union([z.number().int().gte(1).lte(10), z.null()]).describe("The quality of the audio in the consultation in a scale of 1 to 10."),
  "transcription": z.union([z.number().int().gte(1).lte(10), z.null()]).describe("The quality of the transcription in the consultation in a scale of 1 to 10."),
  "anamnesis": z.union([z.number().int().gte(1).lte(10), z.null()]).describe("The quality of the anamnesis of the consultation in a scale of 1 to 10.").optional(),
  "fields": z.union([z.number().int().gte(1).lte(10), z.null()]).describe("The quality of the rest of the fields in the consultation in a scale of 1 to 10.").optional(),
  "comments": z.string().describe("Additional comments from the user about the result.").optional(),
  "extraFields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `extraFields` to the tool, first call the tool `expandSchema` with \"/properties/extraFields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional fields from the user about the result.</property-description>").optional()
}