import { z } from "zod"

export const inputParamsSchema = {
  "file_id": z.string().describe("Filter by File ID. Only Evaluations for the specified File will be returned."),
  "page": z.number().int().gte(1).describe("Page number for pagination.").optional(),
  "size": z.number().int().gte(0).describe("Page size for pagination. Number of Evaluations to fetch.").optional()
}