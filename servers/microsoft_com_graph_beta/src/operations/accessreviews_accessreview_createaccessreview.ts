import { z } from "zod"

export const toolName = `accessreviews_accessreview_createaccessreview`
export const toolDescription = `Create accessReview (deprecated)`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.string().optional() }).shape