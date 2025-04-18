import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "state": z.enum(["open","closed","all"]).describe("The state of the milestone. Either `open`, `closed`, or `all`.").optional(),
  "sort": z.enum(["due_on","completeness"]).describe("What to sort results by. Either `due_on` or `completeness`.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction of the sort. Either `asc` or `desc`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}