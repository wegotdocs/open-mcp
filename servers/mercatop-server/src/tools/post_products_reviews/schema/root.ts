import { z } from "zod"

export const inputParamsSchema = {
  "product_id": z.number().int().describe("Unique identifier for the product.").optional(),
  "status": z.enum(["approved","hold","spam","unspam","trash","untrash"]).describe("Status of the review.").optional(),
  "reviewer": z.string().describe("Name of the reviewer.").optional(),
  "reviewer_email": z.string().describe("Email of the reviewer.").optional(),
  "review": z.string().describe("Review content.").optional(),
  "rating": z.number().int().describe("Review rating (0 to 5).").optional()
}