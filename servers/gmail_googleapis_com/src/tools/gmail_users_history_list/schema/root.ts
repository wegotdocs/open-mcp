import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "historyTypes": z.array(z.enum(["messageAdded","messageDeleted","labelAdded","labelRemoved"])).describe("History types to be returned by the function").optional(),
  "labelId": z.string().describe("Only return messages with a label matching the ID.").optional(),
  "maxResults": z.number().int().describe("Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500.").optional(),
  "pageToken": z.string().describe("Page token to retrieve a specific page of results in the list.").optional(),
  "startHistoryId": z.string().describe("Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request.").optional()
}