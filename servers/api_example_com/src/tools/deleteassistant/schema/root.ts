import { z } from "zod"

export const inputParamsSchema = {
  "assistantId": z.string().uuid().describe("Guid")
}