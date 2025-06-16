import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n").optional(),
  "label_selector": z.string().describe("Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](#label-selector)\".\n").optional(),
  "ip": z.string().describe("Filter results by IP address.").optional(),
  "page": z.number().int().describe("Page number to return. For more information, see \"[Pagination](#pagination)\".").optional(),
  "per_page": z.number().int().describe("Maximum number of entries returned per page. For more information, see \"[Pagination](#pagination)\".").optional(),
  "sort": z.enum(["id","id:asc","id:desc","created","created:asc","created:desc"]).describe("Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](#sorting)\".\n").optional()
}