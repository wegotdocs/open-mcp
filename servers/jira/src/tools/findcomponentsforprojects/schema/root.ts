import { z } from "zod"

export const inputParams = {
  "projectIdsOrKeys": z.array(z.string()).describe("The project IDs and/or project keys (case sensitive).").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.enum(["description","-description","+description","name","-name","+name"]).describe("[Order](#ordering) the results by a field:\n\n *  `description` Sorts by the component description.\n *  `name` Sorts by component name.").optional(),
  "query": z.string().describe("Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).").optional()
}