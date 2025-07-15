import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("A project ID to filter the response on").optional(),
  "active": z.number().int().describe("Filter only on `0` = non-active or `1` = active entities in the response").optional(),
  "nonBillable": z.number().int().describe("Filter response on `0` = billable or `1` = non-billable entities").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional(),
  "sort": z.string().describe("A field to sort the list values in the response, ascending (default), pre-fix `-` to apply descending. (Limited fields, varies per endpoint)").optional(),
  "modified_since": z.string().describe("Datetime in either `YYYY-MM-DD hh:mm:ss` or as a Unix timestamp in seconds to filter on all records with an equal or later `modified` timestamp").optional(),
  "fields": z.array(z.string()).describe("Comma-delimited set of fields to include in the response").optional(),
  "expand": z.string().describe("Comma-delimited values expands the response with additional fields: `phase_tasks` - A list of the project tasks available in this phase `phase_team` - A list of assignees on this phase by `people_id` and `hourly_rate`, the list may be empty`").optional()
}