import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "limit": z.number().int().describe("Maximum rows to return").optional()
}