import { z } from "zod"

export const inputParams = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.enum(["description","-description","+description","issueCount","-issueCount","+issueCount","lead","-lead","+lead","name","-name","+name"]).describe("[Order](#ordering) the results by a field:\n\n *  `description` Sorts by the component description.\n *  `issueCount` Sorts by the count of issues associated with the component.\n *  `lead` Sorts by the user key of the component's project lead.\n *  `name` Sorts by component name.").optional(),
  "componentSource": z.enum(["jira","compass","auto"]).describe("The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`.").optional(),
  "query": z.string().describe("Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).").optional()
}