import { z } from "zod"

export const inputParamsSchema = {
  "post_id": z.string().uuid(),
  "attachments": z.array(z.object({ "attachment_id": z.string().uuid().describe("id of the uploaded attachment.") })).max(50).nullable().describe("List of attachment ids that belong to the post.").optional(),
  "body": z.string().nullable().describe("The body in HTML format. The maximum payload is 204800 bytes.").optional(),
  "comments_enabled": z.boolean().nullable().describe("Determines if comments are enabled for this post. If not set, the default value of the group will be used.").optional(),
  "external_id": z.string().nullable().describe("Can be used for customer side identification of a post. Should be unique.").optional(),
  "highlighted_until": z.string().datetime({ offset: true }).nullable().describe("The highlighted date indicates until when a post should be a highlighted post.\nIf no value is passed, the post will not be highlighted.\nThe timestamp is formatted as full ISO 8601 e.g. `2021-12-20T10:33:52Z`.").optional(),
  "mentioned_user_ids": z.array(z.string().uuid()).nullable().describe("List of user ids that are mentioned in the post.").optional(),
  "published_at": z.string().datetime({ offset: true }).nullable().describe("The published date indicates when the post was published.\nThe value can't be used if the value is in the future or the `scheduled_at` is set.\nThe timestamp is formatted as full ISO 8601 e.g. `2021-12-20T10:33:52Z`.").optional(),
  "reactions_enabled": z.boolean().nullable().describe("Determines if reactions are enabled for this post. If not set, the default value of the group will be used.").optional(),
  "scheduled_at": z.string().datetime({ offset: true }).nullable().describe("The scheduled date indicates when the post is to be published.\nIf no value is passed, the post will be published immediately.\nA post that has already been published cannot be scheduled again.\"\nThe timestamp is formatted as full ISO 8601 e.g. `2021-12-20T10:33:52Z`.").optional(),
  "title": z.string().describe("The title in plain text.")
}