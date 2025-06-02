import { z } from "zod"

export const inputParamsSchema = {
  "post_id": z.string().uuid(),
  "comment_id": z.string().uuid(),
  "attachments": z.array(z.object({ "attachment_id": z.string().uuid().describe("id of the uploaded attachment.") })).max(10).nullable().describe("List of attachment ids that belong to the comment.").optional(),
  "body": z.string().describe("The body of the comment."),
  "external_id": z.string().nullable().describe("Can be used for customer side identification of a comment. Should be unique.").optional(),
  "language": z.string().nullable().describe("Language of the comment body represented as string compliant with ISO 639-1 norm. In case the language is not supported, the field will be ignored.").optional(),
  "mentioned_user_ids": z.array(z.string().uuid()).nullable().describe("User IDs of mentioned users. If not provided, the mentioned users will be removed. Comment body must contain the mentioned user IDs in a properly formatted form. Use of this field requires the feature to be enabled.").optional()
}