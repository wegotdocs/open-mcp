import { z } from "zod"

export const toolName = `accessreviews_createinstances`
export const toolDescription = `Create new navigation property to instances for accessReviews`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/instances`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.string().optional() }).shape