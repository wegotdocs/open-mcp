import { z } from "zod"

export const inputParamsSchema = {
  "assistantId": z.string().uuid().describe("Assistant where the use case belongs to"),
  "useCaseId": z.string().uuid().describe("Use Case to associate the file"),
  "threadId": z.string().nullable().describe("Thread identifier (optional)").optional(),
  "fileId": z.string().nullable().describe("File identifier").optional()
}