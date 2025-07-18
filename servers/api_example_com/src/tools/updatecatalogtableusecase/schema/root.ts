import { z } from "zod"

export const inputParamsSchema = {
  "catalogTableId": z.string().uuid().describe("Guid"),
  "useCaseId": z.string().uuid().describe("Guid"),
  "active": z.boolean().optional()
}