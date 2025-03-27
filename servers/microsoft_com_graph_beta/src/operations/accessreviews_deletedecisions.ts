import { z } from "zod"

export const toolName = `accessreviews_deletedecisions`
export const toolDescription = `Delete navigation property decisions for accessReviews`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "header": z.object({ "If-Match": z.string().describe("ETag").optional() }).optional() }).shape