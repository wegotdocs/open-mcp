import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().nullable().describe("Url from where the file will be obtained.").optional(),
  "prompt": z.string().nullable().describe("(optional) Prompt to execute.").optional(),
  "useCaseId": z.string().uuid().nullable().describe("(optional) Guid identifier of the use case that contains the information as the prompt to execute. It can be extracted from the general API.").optional(),
  "entryType": z.union([z.literal(1), z.literal(2)]).describe("BatchRequestFormatType enum").optional(),
  "exitType": z.union([z.literal(1), z.literal(2)]).describe("BatchResponseFormatType enum").optional(),
  "jsonPath": z.string().nullable().describe("(optional) Json path to extract the information from the document to process.").optional()
}