import { z } from "zod"

export const inputParams = {
  "id": z.array(z.number().int()).describe("The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can't be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`.").optional(),
  "fieldContextId": z.array(z.number().int()).describe("The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can't be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`.").optional(),
  "issueId": z.number().int().describe("The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with `projectKeyOrId`, or `issueTypeId`.").optional(),
  "projectKeyOrId": z.string().describe("The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can't be provided with `issueId`.").optional(),
  "issueTypeId": z.string().describe("The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can't be provided with `issueId`.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "fieldIdsOrKeys": z.array(z.string()).min(1).describe("List of IDs or keys of the custom fields. It can be a mix of IDs and keys in the same query.")
}