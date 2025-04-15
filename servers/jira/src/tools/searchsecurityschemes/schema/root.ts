import { z } from "zod"

export const inputParamsSchema = {
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of issue security scheme IDs. To include multiple issue security scheme IDs, separate IDs with an ampersand: `id=10000&id=10001`.").optional(),
  "projectId": z.array(z.string()).describe("The list of project IDs. To include multiple project IDs, separate IDs with an ampersand: `projectId=10000&projectId=10001`.").optional()
}