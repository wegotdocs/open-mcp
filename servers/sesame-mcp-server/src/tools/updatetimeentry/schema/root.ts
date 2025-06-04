import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Time Entry ID"),
  "projectId": z.string().uuid().optional(),
  "tagIds": z.array(z.string().uuid()).optional(),
  "comment": z.string().optional(),
  "timeEntryIn": z.any(),
  "timeEntryOut": z.any().optional()
}