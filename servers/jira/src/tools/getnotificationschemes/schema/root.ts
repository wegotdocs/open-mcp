import { z } from "zod"

export const inputParams = {
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of notification schemes IDs to be filtered by").optional(),
  "projectId": z.array(z.string()).describe("The list of projects IDs to be filtered by").optional(),
  "onlyDefault": z.boolean().describe("When set to true, returns only the default notification scheme. If you provide project IDs not associated with the default, returns an empty page. The default value is false.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information\n *  `field` Returns information about any custom fields assigned to receive an event\n *  `group` Returns information about any groups assigned to receive an event\n *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information\n *  `projectRole` Returns information about any project roles assigned to receive an event\n *  `user` Returns information about any users assigned to receive an event").optional()
}