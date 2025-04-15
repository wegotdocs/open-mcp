import { z } from "zod"

export const inputParamsSchema = {
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of issue security level member IDs. To include multiple issue security level members separate IDs with an ampersand: `id=10000&id=10001`.").optional(),
  "schemeId": z.array(z.string()).describe("The list of issue security scheme IDs. To include multiple issue security schemes separate IDs with an ampersand: `schemeId=10000&schemeId=10001`.").optional(),
  "levelId": z.array(z.string()).describe("The list of issue security level IDs. To include multiple issue security levels separate IDs with an ampersand: `levelId=10000&levelId=10001`.").optional(),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information\n *  `field` Returns information about the custom field granted the permission\n *  `group` Returns information about the group that is granted the permission\n *  `projectRole` Returns information about the project role granted the permission\n *  `user` Returns information about the user who is granted the permission").optional()
}