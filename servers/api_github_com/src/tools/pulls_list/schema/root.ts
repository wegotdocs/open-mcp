import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "state": z.enum(["open","closed","all"]).describe("Either `open`, `closed`, or `all` to filter by state.").optional(),
  "head": z.string().describe("Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.").optional(),
  "base": z.string().describe("Filter pulls by base branch name. Example: `gh-pages`.").optional(),
  "sort": z.enum(["created","updated","popularity","long-running"]).describe("What to sort results by. `popularity` will sort by the number of comments. `long-running` will sort by date created and will limit the results to pull requests that have been open for more than a month and have had activity within the past month.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction of the sort. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}