import { z } from "zod"

export const toolName = `parameters_accessreviews_accessreview_id_instances_accessreview_`
export const toolDescription = ``
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/$count`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape