import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "includeSpamTrash": z.boolean().describe("Include threads from `SPAM` and `TRASH` in the results.").optional(),
  "labelIds": z.array(z.string()).describe("Only return threads with labels that match all of the specified label IDs.").optional(),
  "maxResults": z.number().int().describe("Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500.").optional(),
  "pageToken": z.string().describe("Page token to retrieve a specific page of results in the list.").optional(),
  "q": z.string().describe("Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `\"from:someuser@example.com rfc822msgid: is:unread\"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.").optional()
}