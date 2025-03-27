import { z } from "zod"

export const toolName = `accessreviews_accessreview_listaccessreview`
export const toolDescription = `List accessReviews (deprecated)`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "$top": z.number().int().gte(0).describe("Show only the first n items").optional(), "$skip": z.number().int().gte(0).describe("Skip the first n items").optional(), "$search": z.string().describe("Search items by search phrases").optional(), "$filter": z.string().describe("Filter items by property values").optional(), "$count": z.boolean().describe("Include count of items").optional(), "$orderby": z.array(z.enum(["id","id desc","businessFlowTemplateId","businessFlowTemplateId desc","createdBy","createdBy desc","description","description desc","displayName","displayName desc","endDateTime","endDateTime desc","reviewedEntity","reviewedEntity desc","reviewerType","reviewerType desc","settings","settings desc","startDateTime","startDateTime desc","status","status desc"])).describe("Order items by property values").optional(), "$select": z.array(z.enum(["id","businessFlowTemplateId","createdBy","description","displayName","endDateTime","reviewedEntity","reviewerType","settings","startDateTime","status","decisions","instances","myDecisions","reviewers"])).describe("Select properties to be returned").optional(), "$expand": z.array(z.enum(["*","decisions","instances","myDecisions","reviewers"])).describe("Expand related entities").optional() }).optional() }).shape