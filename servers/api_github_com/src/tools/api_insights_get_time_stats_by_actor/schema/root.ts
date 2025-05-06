import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "actor_type": z.enum(["installation","classic_pat","fine_grained_pat","oauth_app","github_app_user_to_server"]).describe("The type of the actor"),
  "actor_id": z.number().int().describe("The ID of the actor"),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "timestamp_increment": z.string().describe("The increment of time used to breakdown the query results (5m, 10m, 1h, etc.)")
}