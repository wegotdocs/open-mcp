import { z } from "zod"

export const toolName = `createcustomobject`
export const toolDescription = `Create Custom Object`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/custom_objects`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "custom_object": z.object({ "key": z.string().describe("Unique identifier. Writable on create only").optional(), "title": z.string().describe("Display name for the object").optional(), "title_pluralized": z.string().describe("Pluralized version of the object's title").optional() }).optional() }).optional() }).shape