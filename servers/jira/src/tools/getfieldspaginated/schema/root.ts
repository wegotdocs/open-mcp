import { z } from "zod"

export const inputParams = {
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "type": z.array(z.enum(["custom","system"])).describe("The type of fields to search.").optional(),
  "id": z.array(z.string()).describe("The IDs of the custom fields to return or, where `query` is specified, filter.").optional(),
  "query": z.string().describe("String used to perform a case-insensitive partial match with field names or descriptions.").optional(),
  "orderBy": z.enum(["contextsCount","-contextsCount","+contextsCount","lastUsed","-lastUsed","+lastUsed","name","-name","+name","screensCount","-screensCount","+screensCount","projectsCount","-projectsCount","+projectsCount"]).describe("[Order](#ordering) the results by:\n\n *  `contextsCount` sorts by the number of contexts related to a field\n *  `lastUsed` sorts by the date when the value of the field last changed\n *  `name` sorts by the field name\n *  `screensCount` sorts by the number of screens related to a field").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `key` returns the key for each field\n *  `stableId` returns the stableId for each field\n *  `lastUsed` returns the date when the value of the field last changed\n *  `screensCount` returns the number of screens related to a field\n *  `contextsCount` returns the number of contexts related to a field\n *  `isLocked` returns information about whether the field is locked\n *  `searcherKey` returns the searcher key for each custom field").optional(),
  "projectIds": z.array(z.number().int()).optional()
}