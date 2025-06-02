import { z } from "zod"

export const inputParamsSchema = {
  "post_id": z.string().uuid(),
  "attachments": z.array(z.object({ "attachment_id": z.string().uuid().describe("id of the uploaded attachment.") })).max(10).nullable().describe("List of attachment ids that belong to the comment.").optional(),
  "author_id": z.string().uuid().nullable().describe("The user id of the author (default: current actor). If a user other than the current actor is specified, the current actor requires the legacy permission `POST_COMMENTS_IMPERSONATE`.").optional(),
  "body": z.string().describe("The body of the comment."),
  "external_id": z.string().nullable().describe("Can be used for customer side identification of a comment. Should be unique.").optional(),
  "language": z.string().nullable().describe("Language of the comment body represented as string compliant with ISO 639-1 norm. In case the language is not supported, the field will be ignored.").optional(),
  "mentioned_user_ids": z.array(z.string().uuid()).nullable().describe("The list of user IDs of users mentioned in the comment.").optional(),
  "published_at": z.string().datetime({ offset: true }).nullable().describe("The timestamp of the publishing of the comment. If not provided, will be set to the time of the comment creation. The timestamp is formatted as full ISO 8601 e.g. `2021-12-20T10:33:52Z`.").optional(),
  "quoted_comment_id": z.string().uuid().nullable().describe("ID of the comment, that the newly created comment is responding to. If not provided, the comment will be a top level comment.").optional()
}