import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n").optional(),
  "label_selector": z.string().describe("Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](#label-selector)\".\n").optional(),
  "sort": z.enum(["id","id:asc","id:desc","name","name:asc","name:desc","created","created:asc","created:desc"]).describe("Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](#sorting)\".\n").optional(),
  "status": z.enum(["initializing","starting","running","stopping","off","deleting","rebuilding","migrating","unknown"]).describe("Can be used multiple times. The response will only contain Server matching the status").optional(),
  "page": z.number().int().describe("Page number to return. For more information, see \"[Pagination](#pagination)\".").optional(),
  "per_page": z.number().int().describe("Maximum number of entries returned per page. For more information, see \"[Pagination](#pagination)\".").optional()
}