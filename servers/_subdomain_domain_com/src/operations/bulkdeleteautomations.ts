import { z } from "zod"

export const toolName = `bulkdeleteautomations`
export const toolDescription = `Bulk Delete Automations`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/automations/destroy_many`
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

export const inputParams = z.object({ "query": z.object({ "ids": z.array(z.number().int()).describe("The IDs of the automations to delete").optional() }).optional() }).shape