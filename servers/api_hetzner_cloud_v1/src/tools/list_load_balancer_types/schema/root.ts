import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n").optional(),
  "page": z.number().int().describe("Page number to return. For more information, see \"[Pagination](#pagination)\".").optional(),
  "per_page": z.number().int().describe("Maximum number of entries returned per page. For more information, see \"[Pagination](#pagination)\".").optional()
}