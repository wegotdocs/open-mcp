import { z } from "zod"

export const toolName = `description_accessreviewdecisions_count`
export const toolDescription = ``
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviewDecisions/$count`
export const method = `description`
export const security = []

export const inputParams = z.object({}).shape