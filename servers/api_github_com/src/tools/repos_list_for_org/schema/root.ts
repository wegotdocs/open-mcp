import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "type": z.enum(["all","public","private","forks","sources","member"]).describe("Specifies the types of repositories you want returned.").optional(),
  "sort": z.enum(["created","updated","pushed","full_name"]).describe("The property to sort the results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}