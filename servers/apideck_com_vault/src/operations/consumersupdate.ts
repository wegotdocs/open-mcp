import { z } from "zod"

export const toolName = `consumersupdate`
export const toolDescription = `Update consumer`
export const baseUrl = `https://unify.apideck.com`
export const path = `/vault/consumers/{consumer_id}`
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

export const inputParams = z.object({ "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "path": z.object({ "consumer_id": z.string().describe("ID of the consumer to return") }).optional(), "body": z.object({ "metadata": z.object({ "account_name": z.string().describe("The name of the account as shown in the sidebar.").optional(), "email": z.string().describe("The email of the user as shown in the sidebar.").optional(), "image": z.string().describe("The avatar of the user in the sidebar. Must be a valid URL").optional(), "user_name": z.string().describe("The name of the user as shown in the sidebar.").optional() }).describe("The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.").optional() }).strict().optional() }).shape