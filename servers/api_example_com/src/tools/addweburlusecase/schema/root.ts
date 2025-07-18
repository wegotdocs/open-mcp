import { z } from "zod"

export const inputParamsSchema = {
  "useCaseId": z.string().uuid().describe("Guid"),
  "webIds": z.array(z.string().uuid()).nullable().describe("IEnumerable of WebIds").optional()
}