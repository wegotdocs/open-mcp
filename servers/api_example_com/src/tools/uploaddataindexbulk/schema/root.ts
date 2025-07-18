import { z } from "zod"

export const inputParamsSchema = {
  "Files": z.array(z.string().base64()).describe("The file to be uploaded.").optional(),
  "UseCaseId": z.string().uuid().describe("The optional use case identifier associated with the uploaded data.").optional(),
  "Comments": z.string().describe("Comments").optional()
}