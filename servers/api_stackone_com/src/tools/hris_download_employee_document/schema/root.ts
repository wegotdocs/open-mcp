import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "subResourceId": z.string(),
  "format": z.string().nullable().describe("The format to download the file in").optional(),
  "export_format": z.string().nullable().describe("The export format of the file").optional(),
  "x-account-id": z.string().describe("The account identifier")
}