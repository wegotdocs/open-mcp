import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.number().int().describe("A client ID associated with projects to filter the response on").optional(),
  "project_id": z.number().int().describe("A project ID to filter the response on").optional(),
  "phase_id": z.number().int().describe("A phase ID associated with a project to filter the response on").optional(),
  "task_meta_id": z.number().int().describe("A project task ID to filter the response on").optional(),
  "people_id": z.number().int().describe("A people ID to filter the response on").optional(),
  "start_date": z.string().describe("Start of date range in format YYYY-MM-DD. Must be used together with `end_date`").optional(),
  "end_date": z.string().describe("End of date range in format YYYY-MM-DD. Must be used together with `start_date`. Will be inclusive of `repeat_end_date` date.").optional(),
  "billable": z.number().int().describe("Filter response on `0` = non-billable or `1` = billable").optional(),
  "status": z.number().int().describe("Filter response on the Status. `1` = Tentative, `2` = Confirmed, `3` = Complete\"").optional(),
  "repeat_state": z.number().int().describe("Filter response on the repeat state. `0` = No repeat, `1` = Weekly, `2` = Monthly, `3` = Every two weeks, `4` = Every three weeks, `5` = Every six weeks, `6` = Every two months, `7` = Every three months, `8` = Every six months, `9` = Yearly").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional(),
  "sort": z.string().describe("A field to sort the list values in the response, ascending (default), pre-fix `-` to apply descending. (Limited fields, varies per endpoint)").optional(),
  "modified_since": z.string().describe("Datetime in either `YYYY-MM-DD hh:mm:ss` or as a Unix timestamp in seconds to filter on all records with an equal or later `modified` timestamp").optional(),
  "fields": z.array(z.string()).describe("Comma-delimited set of fields to include in the response").optional(),
  "expand": z.string().describe("Use `task_days` to return an additional array of dates `[YYYY-MM-DD]` calculated by taking into account the date range & `repeat_end_date` of each `task_id` plus holidays & availability of all associated people. (e.g. weekends and holidays dates will not be returned). By default, a date is returned if any person is available, the `people_id` filter may be used to limit this. The `start_date` and `end_date` filters must always be provided.").optional()
}