import { z } from "zod"

export const inputParamsSchema = {
  "since": z.number().int().describe("An organization ID. Only return organizations with an ID greater than this ID.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}