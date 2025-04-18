import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "review_id": z.number().int().describe("The unique identifier of the review."),
  "message": z.string().describe("The message for the pull request review dismissal"),
  "event": z.literal("DISMISS").optional()
}