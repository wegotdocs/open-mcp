import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User's email address. The special value \"me\" can be used to indicate the authenticated user."),
  "displayLanguage": z.string().describe("The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example `en-GB`, `fr` or `ja` for British English, French, or Japanese respectively). The set of languages supported by Gmail evolves over time, so please refer to the \"Language\" dropdown in the Gmail settings for all available options, as described in the language settings help article. A table of sample values is also provided in the Managing Language Settings guide Not all Gmail clients can display the same set of languages. In the case that a user's display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default).").optional()
}