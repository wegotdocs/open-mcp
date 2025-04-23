import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("String ID of evaluation. Starts with `ev_` or `evr_`."),
  "page": z.number().int().gte(1).describe("Page number for pagination.").optional(),
  "size": z.number().int().gte(0).describe("Page size for pagination. Number of Logs to fetch.").optional(),
  "run_id": z.array(z.string()).describe("Filter by Run IDs. Only Logs for the specified Runs will be returned.").optional()
}