import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("tenant"),
  "pd_id": z.string().describe("pdId").optional(),
  "from_date": z.string().describe("timestamp").optional(),
  "to_date": z.string().describe("timestamp").optional(),
  "page": z.string().describe("page").optional(),
  "size": z.string().describe("size").optional()
}