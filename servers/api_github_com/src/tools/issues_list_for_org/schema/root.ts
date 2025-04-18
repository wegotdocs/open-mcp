import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "filter": z.enum(["assigned","created","mentioned","subscribed","repos","all"]).describe("Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation.").optional(),
  "state": z.enum(["open","closed","all"]).describe("Indicates the state of the issues to return.").optional(),
  "labels": z.string().describe("A list of comma separated label names. Example: `bug,ui,@high`").optional(),
  "type": z.string().describe("Can be the name of an issue type.").optional(),
  "sort": z.enum(["created","updated","comments"]).describe("What to sort results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}