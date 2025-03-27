import { z } from "zod"

export const toolName = `consumersadd`
export const toolDescription = `Create consumer`
export const baseUrl = `https://unify.apideck.com`
export const path = `/vault/consumers`
export const method = `post`
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

export const inputParams = z.object({ "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "body": z.object({ "aggregated_request_count": z.number().readonly().optional(), "application_id": z.string().describe("ID of your Apideck Application").readonly().optional(), "connections": z.array(z.object({ "auth_type": z.enum(["oauth2","apiKey","basic","custom","none"]).describe("Type of authorization used by the connector").readonly().optional(), "consumer_id": z.string().optional(), "created_at": z.string().optional(), "enabled": z.boolean().optional(), "icon": z.string().optional(), "id": z.string().readonly().optional(), "logo": z.string().optional(), "metadata": z.object({}).catchall(z.any()).nullable().describe("Attach your own consumer specific metadata").optional(), "name": z.string().optional(), "service_id": z.string().optional(), "settings": z.record(z.any()).nullable().describe("Connection settings. Values will persist to `form_fields` with corresponding id").optional(), "state": z.enum(["available","callable","added","configured","authorized"]).optional(), "tag_line": z.string().readonly().optional(), "unified_api": z.string().optional(), "updated_at": z.string().nullable().optional(), "website": z.string().readonly().optional() })).readonly().optional(), "consumer_id": z.string().describe("Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID."), "created": z.string().readonly().optional(), "metadata": z.object({ "account_name": z.string().describe("The name of the account as shown in the sidebar.").optional(), "email": z.string().describe("The email of the user as shown in the sidebar.").optional(), "image": z.string().describe("The avatar of the user in the sidebar. Must be a valid URL").optional(), "user_name": z.string().describe("The name of the user as shown in the sidebar.").optional() }).describe("The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.").optional(), "modified": z.string().readonly().optional(), "request_count_updated": z.string().readonly().optional(), "request_counts": z.object({ "proxy": z.number().optional(), "unify": z.number().optional(), "vault": z.number().optional() }).readonly().optional(), "services": z.array(z.string()).readonly().optional() }).optional() }).shape