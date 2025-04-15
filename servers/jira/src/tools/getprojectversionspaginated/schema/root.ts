import { z } from "zod"

export const inputParamsSchema = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.enum(["description","-description","+description","name","-name","+name","releaseDate","-releaseDate","+releaseDate","sequence","-sequence","+sequence","startDate","-startDate","+startDate"]).describe("[Order](#ordering) the results by a field:\n\n *  `description` Sorts by version description.\n *  `name` Sorts by version name.\n *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.\n *  `sequence` Sorts by the order of appearance in the user interface.\n *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last.").optional(),
  "query": z.string().describe("Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive).").optional(),
  "status": z.string().describe("A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `issuesstatus` Returns the number of issues in each status category for each version.\n *  `operations` Returns actions that can be performed on the specified version.\n *  `driver` Returns the Atlassian account ID of the version driver.\n *  `approvers` Returns a list containing the approvers for this version.").optional()
}