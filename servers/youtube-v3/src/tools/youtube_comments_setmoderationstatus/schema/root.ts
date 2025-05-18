import { z } from "zod"

export const inputParamsSchema = {
  "id": z.array(z.string()).describe("Modifies the moderation status of the comments with the given IDs"),
  "moderationStatus": z.enum(["published","heldForReview","likelySpam","rejected"]).describe("Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: 'heldForReview', 'published' or 'rejected'."),
  "banAuthor": z.boolean().describe("If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.").optional()
}