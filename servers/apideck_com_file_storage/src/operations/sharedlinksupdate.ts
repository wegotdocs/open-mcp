import { z } from "zod"

export const toolName = `sharedlinksupdate`
export const toolDescription = `Update Shared Link`
export const baseUrl = `https://unify.apideck.com`
export const path = `/file-storage/shared-links/{id}`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("ID of the record you are acting upon.") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "body": z.object({ "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "download_url": z.string().describe("The URL that can be used to download the file.").optional(), "expires_at": z.string().datetime({ offset: true }).readonly().optional(), "password": z.string().nullable().describe("Optional password for the shared link.").optional(), "password_protected": z.boolean().describe("Indicated if the shared link is password protected.").readonly().optional(), "scope": z.enum(["public","company"]).describe("The scope of the shared link.").optional(), "target": z.object({ "id": z.string().describe("A unique identifier for an object.").readonly(), "name": z.string().describe("The name of the file").optional(), "type": z.enum(["file","folder","url"]).describe("The type of resource. Could be file, folder or url").readonly().optional() }).strict().readonly().optional(), "target_id": z.string().describe("The ID of the file or folder to link."), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "url": z.string().describe("The URL that can be used to view the file.").readonly().optional() }).strict().optional() }).shape