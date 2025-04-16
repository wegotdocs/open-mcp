import { z } from "zod"

export const inputParamsSchema = {
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.enum(["1m","1h","1d"]).describe("Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only usage for these projects.").optional(),
  "user_ids": z.array(z.string()).describe("Return only usage for these users.").optional(),
  "api_key_ids": z.array(z.string()).describe("Return only usage for these API keys.").optional(),
  "models": z.array(z.string()).describe("Return only usage for these models.").optional(),
  "batch": z.boolean().describe("If `true`, return batch jobs only. If `false`, return non-batch jobs only. By default, return both.\n").optional(),
  "group_by": z.array(z.enum(["project_id","user_id","api_key_id","model","batch"])).describe("Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `batch` or any combination of them.").optional(),
  "limit": z.number().int().describe("Specifies the number of buckets to return.\n- `bucket_width=1d`: default: 7, max: 31\n- `bucket_width=1h`: default: 24, max: 168\n- `bucket_width=1m`: default: 60, max: 1440\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.").optional()
}