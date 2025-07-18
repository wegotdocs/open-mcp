import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Document Id"),
  "Active": z.boolean().describe("The optional flag indicating whether the data is active or not.").optional(),
  "DataStatusId": z.number().int().describe("The optional data status identifier associated with the data.").optional(),
  "Comments": z.string().describe("The optional comments for the data.").optional(),
  "File": z.string().base64().describe("The optional file to be updated.").optional(),
  "ReturnSource": z.boolean().describe("The optional flag indicating whether the data can be retrieved or not.").optional()
}