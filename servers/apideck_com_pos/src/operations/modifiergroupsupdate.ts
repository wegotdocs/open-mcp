import { z } from "zod"

export const toolName = `modifiergroupsupdate`
export const toolDescription = `Update Modifier Group`
export const baseUrl = `https://unify.apideck.com`
export const path = `/pos/modifier-groups/{id}`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("ID of the record you are acting upon.") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "body": z.object({ "alternate_name": z.string().optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "deleted": z.boolean().nullable().optional(), "id": z.string().describe("A unique identifier for an object.").readonly().optional(), "maximum_allowed": z.number().int().optional(), "minimum_required": z.number().int().optional(), "modifiers": z.array(z.any()).optional(), "name": z.string().optional(), "present_at_all_locations": z.boolean().optional(), "row_version": z.string().nullable().describe("A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.").optional(), "selection_type": z.enum(["single","multiple"]).optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The user who last updated the object.").readonly().optional() }).strict().optional() }).shape