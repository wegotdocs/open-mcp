import { z } from "zod"

export const inputParamsSchema = {
  "attachments": z.array(z.object({ "attachment_id": z.string().uuid().describe("id of the uploaded attachment.") })).max(50).nullable().describe("List of attachment ids that belong to the post.").optional(),
  "author_id": z.string().uuid().nullable().describe("The author of the post (default: current actor). Both the current actor and the specified user must belong to the channel/group the post is assigned to. If a user other than the current actor is specified, the current actor must have the legacy permission `POST_COMMENTS_IMPERSONATE`.").optional(),
  "body": z.string().nullable().describe("The body in HTML format. The maximum payload is 204800 bytes.").optional(),
  "comments_enabled": z.boolean().nullable().describe("Determines if comments are enabled for this post. If not set, the default value of the group will be used.").optional(),
  "external_id": z.string().nullable().describe("Can be used for customer side identification of a post. Should be unique.").optional(),
  "group_ids": z.array(z.string().uuid()).describe("The groups which the post will be assigned to. The user must be a member of these groups."),
  "highlighted_until": z.string().datetime({ offset: true }).nullable().describe("The highlighted date indicates until when a post should be a highlighted post.\nIf no value is passed, the post will not be highlighted.\nThe timestamp is formatted as full ISO 8601 e.g. `2021-12-20T10:33:52Z`.").optional(),
  "language": z.string().nullable().describe("An ISO 639-1 language code or null for the language of the post content. If specified, Flip can use it to support auto-translation functionality.").optional(),
  "mentioned_user_ids": z.array(z.string().uuid()).nullable().describe("List of user ids that are mentioned in the post.").optional(),
  "published_at": z.string().datetime({ offset: true }).nullable().describe("The published date indicates when the post was published.\nThe value can't be used if the value is in the future or the `scheduled_at` is set.\nThe timestamp is formatted as full ISO 8601 e.g. `2021-12-20T10:33:52Z`.").optional(),
  "reactions_enabled": z.boolean().nullable().describe("Determines if reactions are enabled for this post. If not set, the default value of the group will be used.").optional(),
  "scheduled_at": z.string().datetime({ offset: true }).nullable().describe("The scheduled date indicates when the post is to be published.\nIf no value is passed, the post will be published immediately.\nThe timestamp is formatted as full ISO 8601 e.g. `2021-12-20T10:33:52Z`.").optional(),
  "send_push_notifications": z.boolean().nullable().describe("Set if members of the group of this post should receive a notification on their devices.").optional(),
  "title": z.string().describe("The title in plain text.")
}