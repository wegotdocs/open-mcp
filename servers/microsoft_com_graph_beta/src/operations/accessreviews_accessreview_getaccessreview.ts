import { z } from "zod"

export const toolName = `accessreviews_accessreview_getaccessreview`
export const toolDescription = `Get accessReview (deprecated)`
export const baseUrl = `https://graph.microsoft.com/beta`
export const path = `/accessReviews/{accessReview-id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "$select": z.array(z.enum(["id","businessFlowTemplateId","createdBy","description","displayName","endDateTime","reviewedEntity","reviewerType","settings","startDateTime","status","decisions","instances","myDecisions","reviewers"])).describe("Select properties to be returned").optional(), "$expand": z.array(z.enum(["*","decisions","instances","myDecisions","reviewers"])).describe("Expand related entities").optional() }).optional() }).shape