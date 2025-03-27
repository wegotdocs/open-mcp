import { z } from "zod"

export const toolName = `accessreviews_accessreview_instances_accessreview_stop`
export const toolDescription = `Invoke action stop`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/microsoft.graph.stop`
export const method = `post`
export const security = []

export const inputParams = z.object({}).shape