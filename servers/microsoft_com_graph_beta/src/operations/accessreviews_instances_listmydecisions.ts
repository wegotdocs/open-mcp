import { z } from "zod"

export const toolName = `accessreviews_instances_listmydecisions`
export const toolDescription = `List my accessReview decisions (deprecated)`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "$top": z.number().int().gte(0).describe("Show only the first n items").optional(), "$skip": z.number().int().gte(0).describe("Skip the first n items").optional(), "$search": z.string().describe("Search items by search phrases").optional(), "$filter": z.string().describe("Filter items by property values").optional(), "$count": z.boolean().describe("Include count of items").optional(), "$orderby": z.array(z.enum(["id","id desc","accessRecommendation","accessRecommendation desc","accessReviewId","accessReviewId desc","appliedBy","appliedBy desc","appliedDateTime","appliedDateTime desc","applyResult","applyResult desc","justification","justification desc","reviewedBy","reviewedBy desc","reviewedDateTime","reviewedDateTime desc","reviewResult","reviewResult desc"])).describe("Order items by property values").optional(), "$select": z.array(z.enum(["id","accessRecommendation","accessReviewId","appliedBy","appliedDateTime","applyResult","justification","reviewedBy","reviewedDateTime","reviewResult"])).describe("Select properties to be returned").optional(), "$expand": z.array(z.literal("*")).describe("Expand related entities").optional() }).optional() }).shape