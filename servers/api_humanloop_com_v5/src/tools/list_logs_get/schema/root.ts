import { z } from "zod"

export const inputParamsSchema = {
  "file_id": z.string().describe("Unique identifier for the File to list Logs for."),
  "page": z.number().int().gte(1).describe("Page number for pagination.").optional(),
  "size": z.number().int().gte(0).describe("Page size for pagination. Number of Logs to fetch.").optional(),
  "version_id": z.string().describe("If provided, only Logs belonging to the specified Version will be returned.").optional(),
  "version_status": z.enum(["uncommitted","committed","deleted"]).describe("An enumeration.").describe("If provided, only Logs belonging to Versions with the specified status will be returned.").optional(),
  "id": z.array(z.string()).describe("If provided, returns Logs whose IDs contain any of the specified values as substrings.").optional(),
  "search": z.string().describe("If provided, only Logs that contain the provided string in its inputs and output will be returned.").optional(),
  "metadata_search": z.string().describe("If provided, only Logs that contain the provided string in its metadata will be returned.").optional(),
  "start_date": z.union([z.string().datetime({ offset: true }), z.string().date()]).describe("If provided, only Logs created after the specified date will be returned.").optional(),
  "end_date": z.union([z.string().datetime({ offset: true }), z.string().date()]).describe("If provided, only Logs created before the specified date will be returned.").optional(),
  "include_parent": z.boolean().describe("If true, include the full parent Log in the response. Only applicable when retrieving Evaluator Logs.").optional(),
  "in_trace_filter": z.array(z.boolean()).describe("If true, return Logs that are associated to a Trace. False, return Logs that are not associated to a Trace.").optional(),
  "sample": z.number().int().gte(0).describe("If provided, limit the response to a random subset of logs from the filtered results. (This will be an approximate sample, not a strict limit.)").optional(),
  "include_trace_children": z.boolean().describe("If true, populate `trace_children` for the retrieved Logs. Only applicable when retrieving Flow Logs.").optional()
}