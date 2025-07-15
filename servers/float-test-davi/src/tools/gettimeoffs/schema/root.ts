import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().describe("Start of date range in format YYYY-MM-DD. Must be used together with `end_date`").optional(),
  "end_date": z.string().describe("End of date range in format YYYY-MM-DD. Must be used together with `start_date`").optional(),
  "full_day": z.number().int().describe("Filter only on if timeoff is full day: `1` = Yes, `0` = No").optional(),
  "status": z.number().int().describe("Filter on the Status of the time off: `1` = tentative, `2` = confirmed.").optional(),
  "timeoff_type_id": z.number().int().describe("Filter on the ID of the timeoff type").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional(),
  "sort": z.string().describe("A field to sort the list values in the response, ascending (default), pre-fix `-` to apply descending. (Limited fields, varies per endpoint)").optional(),
  "modified_since": z.string().describe("Datetime in either `YYYY-MM-DD hh:mm:ss` or as a Unix timestamp in seconds to filter on all records with an equal or later `modified` timestamp").optional(),
  "fields": z.array(z.string()).describe("Comma-delimited set of fields to include in the response").optional()
}