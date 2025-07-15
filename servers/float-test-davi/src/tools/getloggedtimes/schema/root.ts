import { z } from "zod"

export const inputParamsSchema = {
  "people_id": z.number().int().describe("A people ID to filter the response on").optional(),
  "project_id": z.number().int().describe("A project ID to filter the response on").optional(),
  "phase_id": z.number().int().describe("A phase ID associated with a project to filter the response on").optional(),
  "task_meta_id": z.number().int().describe("A project task ID to filter the response on").optional(),
  "start_date": z.string().describe("Start of date range in format YYYY-MM-DD. Must be used together with `end_date`").optional(),
  "end_date": z.string().describe("End of date range in format YYYY-MM-DD. Must be used together with `start_date`").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional(),
  "sort": z.string().describe("A field to sort the list values in the response, ascending (default), pre-fix `-` to apply descending. (Limited fields, varies per endpoint)").optional(),
  "modified_since": z.string().describe("Datetime in either `YYYY-MM-DD hh:mm:ss` or as a Unix timestamp in seconds to filter on all records with an equal or later `modified` timestamp").optional(),
  "fields": z.array(z.string()).describe("Comma-delimited set of fields to include in the response").optional()
}