import { z } from "zod"

export const inputParamsSchema = {
  "q": z.string().describe("The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See \"[Searching commits](https://docs.github.com/search-github/searching-on-github/searching-commits)\" for a detailed list of qualifiers."),
  "sort": z.enum(["author-date","committer-date"]).describe("Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)").optional(),
  "order": z.enum(["desc","asc"]).describe("Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}