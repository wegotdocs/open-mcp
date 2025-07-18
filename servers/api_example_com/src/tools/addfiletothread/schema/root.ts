import { z } from "zod"

export const inputParamsSchema = {
  "assistantId": z.string().uuid().describe("Assistant where the use case belongs to"),
  "useCaseId": z.string().uuid().describe("Use Case to associate the file"),
  "File": z.string().base64().describe("IFormFile").optional(),
  "ThreadId": z.string().describe("Thread identifier (optional)").optional()
}