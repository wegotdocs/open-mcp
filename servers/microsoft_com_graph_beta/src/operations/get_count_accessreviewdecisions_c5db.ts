import { z } from "zod"

export const toolName = `get_count_accessreviewdecisions_c5db`
export const toolDescription = `Get the number of the resource`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviewDecisions/$count`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "$search": z.string().describe("Search items by search phrases").optional(), "$filter": z.string().describe("Filter items by property values").optional() }).optional() }).shape