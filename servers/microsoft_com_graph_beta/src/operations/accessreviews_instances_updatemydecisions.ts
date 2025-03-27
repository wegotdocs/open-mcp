import { z } from "zod"

export const toolName = `accessreviews_instances_updatemydecisions`
export const toolDescription = `Update the navigation property myDecisions in accessReviews`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "body": z.string().optional() }).shape