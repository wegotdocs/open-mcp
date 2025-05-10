import { z } from "zod"

export const inputParams = {
  "marker": z.string().describe("The \"marker\" for this request, which can be used to paginate through large buckets. Its value should be the value of the `next_marker` property returned with the last page. Listing bucket contents _does not_ support arbitrary page access. See the `next_marker` property in the responses section for more details.").optional(),
  "delimiter": z.string().describe("The delimiter for object names; if given, object names will be returned up to the first occurrence of this character. This is most commonly used with the `/` character to allow bucket transversal in a manner similar to a filesystem, however any delimiter may be used. Use in conjunction with `prefix` to see object names past the first occurrence of the delimiter.").optional(),
  "prefix": z.string().describe("Filters objects returned to only those whose name start with the given prefix. Commonly used in conjunction with `delimiter` to allow transversal of bucket contents in a manner similar to a filesystem.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}