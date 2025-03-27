import { z } from "zod"

export const toolName = `post_restaurants_tenant_restaurantid_customerclaims_id_restauran`
export const toolDescription = `Submit a restaurant response for the claim`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/{tenant}/{restaurantId}/customerclaims/{id}/restaurantresponse`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Two letter code indicating the tenant"), "restaurantId": z.string().describe("Just Eat restaurant identifier"), "id": z.string().describe("Claim identifier") }).optional(), "header": z.object({ "Content-Type": z.string().describe("Indicates the representation of the request body the client is sending (including version)") }).optional(), "body": z.object({ "decision": z.enum(["Accepted","Rejected","PartiallyAccepted"]).describe("Decision on the claim").optional(), "items": z.array(z.object({ "decision": z.enum(["Accepted","Rejected"]).describe("Decision made about the item").optional(), "id": z.string().describe("Item identifier").optional() }).describe("Decision on the item")).nullable().describe("Decisions on the items of a claim").optional(), "justification": z.object({ "comments": z.string().nullable().describe("Comment from the restaurant owner in case they rejected at least one of the items and want to type their own rejection reason").optional(), "reason": z.enum(["AlreadyRefunded","ItemReplaced","PartialRefundRequired","WasNotMissing","WillRedeliver","OrderWasHot","OrderWasOnTime","OrderWasPacked","FoodWasIntact","AddExtraItem","Other"]).describe("One of the predefined reasons").optional() }).nullable().describe("Reasons why of the decision for the claim").optional() }).nullable().describe("Restaurant response for the claim").optional() }).shape