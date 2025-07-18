import { z } from "zod"

export const inputParamsSchema = {
  "assistantId": z.string().uuid().describe("Assistant where the use case belongs to"),
  "File": z.string().base64().describe("The file to be uploaded.").optional()
}