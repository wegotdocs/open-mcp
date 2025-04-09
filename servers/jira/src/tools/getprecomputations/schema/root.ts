import { z } from "zod"

export const inputParams = {
  "functionKey": z.array(z.string()).describe("The function key in format:\n\n *  Forge: `ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]`\n *  Connect: `[App key]__[Module key]`").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  `functionKey` Sorts by the functionKey.\n *  `used` Sorts by the used timestamp.\n *  `created` Sorts by the created timestamp.\n *  `updated` Sorts by the updated timestamp.").optional()
}