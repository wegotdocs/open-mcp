import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "review_id": z.number().int().describe("The unique identifier of the review."),
  "body": z.string().describe("The body text of the pull request review").optional(),
  "event": z.enum(["APPROVE","REQUEST_CHANGES","COMMENT"]).describe("The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.")
}