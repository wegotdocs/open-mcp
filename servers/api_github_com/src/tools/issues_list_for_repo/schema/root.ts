import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "milestone": z.string().describe("If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.").optional(),
  "state": z.enum(["open","closed","all"]).describe("Indicates the state of the issues to return.").optional(),
  "assignee": z.string().describe("Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.").optional(),
  "type": z.string().describe("Can be the name of an issue type. If the string `*` is passed, issues with any type are accepted. If the string `none` is passed, issues without type are returned.").optional(),
  "creator": z.string().describe("The user that created the issue.").optional(),
  "mentioned": z.string().describe("A user that's mentioned in the issue.").optional(),
  "labels": z.string().describe("A list of comma separated label names. Example: `bug,ui,@high`").optional(),
  "sort": z.enum(["created","updated","comments"]).describe("What to sort results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}