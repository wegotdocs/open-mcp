import { z } from "zod"

export const toolName = `updateobjecttrigger`
export const toolDescription = `Update Object Trigger`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "body": z.object({ "trigger": z.string().optional() }).optional() }).shape