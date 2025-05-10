import { z } from "zod"

export const inputParamsSchema = {
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.literal("1d").describe("Width of each time bucket in response. Currently only `1d` is supported, default to `1d`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only costs for these projects.").optional(),
  "group_by": z.array(z.enum(["project_id","line_item"])).describe("Group the costs by the specified fields. Support fields include `project_id`, `line_item` and any combination of them.").optional(),
  "limit": z.number().int().describe("A limit on the number of buckets to be returned. Limit can range between 1 and 180, and the default is 7.\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.").optional()
}