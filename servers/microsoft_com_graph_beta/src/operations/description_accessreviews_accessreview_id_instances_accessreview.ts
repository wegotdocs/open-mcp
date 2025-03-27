import { z } from "zod"

export const toolName = `description_accessreviews_accessreview_id_instances_accessreview`
export const toolDescription = ``
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}`
export const method = `description`
export const security = []

export const inputParams = z.object({}).shape