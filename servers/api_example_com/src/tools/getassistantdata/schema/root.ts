import { z } from "zod"

export const inputParamsSchema = {
  "assistantId": z.string().uuid().describe("Assistant where the use case belongs to"),
  "fileId": z.string().describe("File identifier to search")
}