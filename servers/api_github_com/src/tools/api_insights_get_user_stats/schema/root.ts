import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "user_id": z.string().describe("The ID of the user to query for stats"),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "sort": z.array(z.enum(["last_rate_limited_timestamp","last_request_timestamp","rate_limited_request_count","subject_name","total_request_count"])).describe("The property to sort the results by.").optional(),
  "actor_name_substring": z.string().describe("Providing a substring will filter results where the actor name contains the substring. This is a case-insensitive search.").optional()
}