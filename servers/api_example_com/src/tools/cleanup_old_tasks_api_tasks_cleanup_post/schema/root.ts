import { z } from "zod"

export const inputParamsSchema = {
  "older_than_hours": z.number().int().describe("Remove completed tasks older than this many hours").optional()
}