import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "tool_name": z.string().describe("The name of the tool used to generate the code scanning analysis.").optional(),
  "tool_guid": z.string().nullable().describe("The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "pr": z.number().int().describe("The number of the pull request for the results you want to list.").optional(),
  "ref": z.string().describe("The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`,\n`refs/heads/<branch name>` or simply `<branch name>`.").optional(),
  "sarif_id": z.string().describe("An identifier for the upload.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "sort": z.literal("created").describe("The property by which to sort the results.").optional()
}