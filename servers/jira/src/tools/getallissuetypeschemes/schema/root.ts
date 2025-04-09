import { z } from "zod"

export const inputParams = {
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.number().int()).describe("The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.").optional(),
  "orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  `name` Sorts by issue type scheme name.\n *  `id` Sorts by issue type scheme ID.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `projects` For each issue type schemes, returns information about the projects the issue type scheme is assigned to.\n *  `issueTypes` For each issue type schemes, returns information about the issueTypes the issue type scheme have.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with issue type scheme name.").optional()
}