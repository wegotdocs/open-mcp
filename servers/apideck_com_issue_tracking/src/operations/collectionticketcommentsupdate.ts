import { z } from "zod"

export const toolName = `collectionticketcommentsupdate`
export const toolDescription = `Update Comment`
export const baseUrl = `https://unify.apideck.com`
export const path = `/issue-tracking/collections/{collection_id}/tickets/{ticket_id}/comments/{id}`
export const method = `patch`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("ID of the record you are acting upon."), "collection_id": z.string().describe("The collection ID"), "ticket_id": z.string().describe("ID of the ticket you are acting upon.") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "body": z.object({ "body": z.string().describe("Body of the comment").optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "id": z.string().describe("A unique identifier for an object.").readonly().optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional() }).strict().optional() }).shape