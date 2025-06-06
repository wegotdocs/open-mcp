import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "product_id": z.number().int().describe("Unique identifier for the product that the review belongs to.").optional(),
  "status": z.enum(["approved","hold","spam","unspam","trash","untrash"]).describe("Status of the review.").optional(),
  "reviewer": z.string().describe("Reviewer name.").optional(),
  "reviewer_email": z.string().email().describe("Reviewer email.").optional(),
  "review": z.string().describe("The content of the review.").optional(),
  "rating": z.number().int().describe("Review rating (0 to 5).").optional()
}