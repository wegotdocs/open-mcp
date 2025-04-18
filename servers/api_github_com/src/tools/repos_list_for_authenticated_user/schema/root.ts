import { z } from "zod"

export const inputParamsSchema = {
  "visibility": z.enum(["all","public","private"]).describe("Limit results to repositories with the specified visibility.").optional(),
  "affiliation": z.string().describe("Comma-separated list of values. Can include:  \n * `owner`: Repositories that are owned by the authenticated user.  \n * `collaborator`: Repositories that the user has been added to as a collaborator.  \n * `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.").optional(),
  "type": z.enum(["all","owner","public","private","member"]).describe("Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.").optional(),
  "sort": z.enum(["created","updated","pushed","full_name"]).describe("The property to sort the results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show repositories updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "before": z.string().datetime({ offset: true }).describe("Only show repositories updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional()
}