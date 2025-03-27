import { z } from "zod"

export const toolName = `parameters_accessreviews_accessreview_id_decisions_accessreviewd`
export const toolDescription = ``
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape