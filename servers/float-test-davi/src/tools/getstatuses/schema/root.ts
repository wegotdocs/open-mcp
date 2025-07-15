import { z } from "zod"

export const inputParamsSchema = {
  "people_id": z.number().int().describe("A people ID to filter the response on").optional(),
  "start_date": z.string().describe("Start of date range in format YYYY-MM-DD. Must be used together with `end_date`").optional(),
  "end_date": z.string().describe("End of date range in format YYYY-MM-DD. Must be used together with `start_date`").optional(),
  "status_type_id": z.number().int().describe("A status type ID to filter the response on").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional(),
  "fields": z.array(z.string()).describe("Comma-delimited set of fields to include in the response").optional()
}