import { z } from "zod"

export const toolName = `deletecustomobjectrecordbyexternalidorname`
export const toolDescription = `Delete Custom Object Record by External Id Or Name`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/custom_objects/{custom_object_key}/records`
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

export const inputParams = z.object({ "path": z.object({ "custom_object_key": z.string().describe("The key of a custom object") }).optional(), "query": z.object({ "external_id": z.string().describe("The external id of a custom object record"), "name": z.string().describe("The name of a custom object record") }).optional() }).shape