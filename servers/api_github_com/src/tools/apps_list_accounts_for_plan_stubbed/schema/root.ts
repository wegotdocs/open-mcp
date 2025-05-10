import { z } from "zod"

export const inputParamsSchema = {
  "plan_id": z.number().int().describe("The unique identifier of the plan."),
  "sort": z.enum(["created","updated"]).describe("The property to sort the results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}