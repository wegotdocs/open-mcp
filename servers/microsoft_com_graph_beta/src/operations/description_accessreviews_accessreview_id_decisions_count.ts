import { z } from "zod"

export const toolName = `description_accessreviews_accessreview_id_decisions_count`
export const toolDescription = ``
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/decisions/$count`
export const method = `description`
export const security = []

export const inputParams = z.object({}).shape