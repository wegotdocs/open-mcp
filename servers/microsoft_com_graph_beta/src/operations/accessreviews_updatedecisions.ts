import { z } from "zod"

export const toolName = `accessreviews_updatedecisions`
export const toolDescription = `Update the navigation property decisions in accessReviews`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "body": z.string().optional() }).shape