import { z } from "zod"

export const inputParams = {
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.number().int()).describe("The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with screen name.").optional(),
  "scope": z.array(z.enum(["GLOBAL","TEMPLATE","PROJECT"])).describe("The scope filter string. To filter by multiple scope, provide an ampersand-separated list. For example, `scope=GLOBAL&scope=PROJECT`.").optional(),
  "orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  `id` Sorts by screen ID.\n *  `name` Sorts by screen name.").optional()
}