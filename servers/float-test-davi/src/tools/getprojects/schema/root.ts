import { z } from "zod"

export const inputParamsSchema = {
  "project_code": z.string().describe("Case-insensitive, URL encoded match of a project code to filter the list response to a single project").optional(),
  "client_id": z.number().int().describe("A client ID associated with projects to filter the response on").optional(),
  "active": z.number().int().describe("Filter only on `0` = non-active or `1` = active entities in the response").optional(),
  "nonBillable": z.number().int().describe("Filter response on `0` = billable or `1` = non-billable entities").optional(),
  "status": z.number().int().describe("Filter response on the `status` of a project").optional(),
  "tag_name": z.string().describe("Case-insensitive, URL encoded, exact text match of tag names to filter the response on. Comma-delimited values will return all matching records.").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional(),
  "sort": z.string().describe("A field to sort the list values in the response, ascending (default), pre-fix `-` to apply descending. (Limited fields, varies per endpoint)").optional(),
  "modified_since": z.string().describe("Datetime in either `YYYY-MM-DD hh:mm:ss` or as a Unix timestamp in seconds to filter on all records with an equal or later `modified` timestamp").optional(),
  "fields": z.array(z.string()).describe("Comma-delimited set of fields to include in the response").optional(),
  "expand": z.string().describe("Comma-delimited values expands the response with additional fields: `project_tasks` - A list of the project tasks available in this project\n`project_team` - A list of people by `people_id` and their project `hourly_rate`, the `phase_id` will be `0`, the list may be empty").optional()
}