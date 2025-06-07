import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "query": z.string().describe("SQL query to execute (SELECT only)"),
  "database": z.union([z.string(), z.null()]).describe("Database to query").optional()
}