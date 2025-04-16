import { z } from "zod"

export const inputParamsSchema = {
  "defaultDatabase": z.string().describe("Optional. The default database (Google Cloud project ID).").optional(),
  "schemaSuffix": z.string().describe("Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.").optional(),
  "tablePrefix": z.string().describe("Optional. The prefix that should be prepended to all table names.").optional()
}