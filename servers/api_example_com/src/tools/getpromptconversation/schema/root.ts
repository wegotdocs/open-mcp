import { z } from "zod"

export const inputParamsSchema = {
  "useCaseId": z.string().uuid().describe("Optional. Guid type identifier.").optional()
}