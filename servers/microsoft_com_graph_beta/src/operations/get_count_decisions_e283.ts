import { z } from "zod"

export const toolName = `get_count_decisions_e283`
export const toolDescription = `Get the number of the resource`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/decisions/$count`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "$search": z.string().describe("Search items by search phrases").optional(), "$filter": z.string().describe("Filter items by property values").optional() }).optional() }).shape