import { z } from "zod"

export const toolName = `accessreviewdecisions_accessreviewdecision_createaccessreviewdec`
export const toolDescription = `Add new entity to accessReviewDecisions`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviewDecisions`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.string().optional() }).shape