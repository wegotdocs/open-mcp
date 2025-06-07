import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.union([z.string(), z.null()]).describe("Start date (ISO format)").optional(),
  "end_date": z.union([z.string(), z.null()]).describe("End date (ISO format)").optional(),
  "action": z.union([z.string(), z.null()]).describe("Filter by action type").optional(),
  "user": z.union([z.string(), z.null()]).describe("Filter by user").optional(),
  "environment": z.union([z.string(), z.null()]).describe("Filter by environment").optional(),
  "status": z.union([z.string(), z.null()]).describe("Filter by status (success/failure/partial)").optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("Maximum number of logs to return").optional(),
  "offset": z.number().int().gte(0).describe("Number of logs to skip").optional()
}