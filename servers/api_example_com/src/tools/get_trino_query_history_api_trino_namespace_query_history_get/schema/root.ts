import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "limit": z.number().int().describe("Number of queries to return").optional()
}