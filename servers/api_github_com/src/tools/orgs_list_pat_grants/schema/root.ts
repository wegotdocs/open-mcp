import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "sort": z.literal("created_at").describe("The property by which to sort the results.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "owner": z.array(z.string()).max(10).describe("A list of owner usernames to use to filter the results.").optional(),
  "repository": z.string().describe("The name of the repository to use to filter the results.").optional(),
  "permission": z.string().describe("The permission to use to filter the results.").optional(),
  "last_used_before": z.string().datetime({ offset: true }).describe("Only show fine-grained personal access tokens used before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "last_used_after": z.string().datetime({ offset: true }).describe("Only show fine-grained personal access tokens used after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "token_id": z.array(z.string()).max(50).describe("The ID of the token").optional()
}