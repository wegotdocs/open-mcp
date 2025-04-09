import { z } from "zod"

export const inputParams = {
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `values.transitions` Returns the transitions that each workflow is associated with.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with workflow name.").optional(),
  "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  `name` Sorts by workflow name.\n *  `created` Sorts by create time.\n *  `updated` Sorts by update time.").optional(),
  "scope": z.string().describe("The scope of the workflow. Global for company-managed projects and Project for team-managed projects.").optional(),
  "isActive": z.boolean().describe("Filters active and inactive workflows.").optional()
}