import { z } from "zod"

export const toolName = `updateattachment`
export const toolDescription = `Update Attachment for Malware`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/attachments/{attachment_id}`
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

export const inputParams = z.object({ "path": z.object({ "attachment_id": z.number().int().describe("The ID of the attachment") }).optional(), "body": z.object({ "attachment": z.object({ "malware_access_override": z.boolean().describe("If true, allows access to attachments with detected malware.").optional() }).optional() }).optional() }).shape