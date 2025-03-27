import { z } from "zod"

export const toolName = `accessreviews_accessreview_deleteaccessreview`
export const toolDescription = `Delete accessReview (deprecated)`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "header": z.object({ "If-Match": z.string().describe("ETag").optional() }).optional() }).shape