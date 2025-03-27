import { z } from "zod"

export const toolName = `accessreviews_updateinstances`
export const toolDescription = `Update the navigation property instances in accessReviews`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "body": z.string().optional() }).shape