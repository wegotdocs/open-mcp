import { z } from "zod"

export const toolName = `deletecustomobjectfield`
export const toolDescription = `Delete Custom Object Field`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "custom_object_key": z.string().describe("The key of a custom object"), "custom_object_field_key_or_id": z.string().describe("The key or id of a custom object field") }).optional() }).shape