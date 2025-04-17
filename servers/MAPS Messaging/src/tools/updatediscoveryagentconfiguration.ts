import { z } from "zod"

export const toolName = `updatediscoveryagentconfiguration`
export const toolDescription = `Update the discovery agents configuration`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/server/discovery/config`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enabled",
    "hostnames",
    "addTxtRecords",
    "domainName"
  ]
}
export const flatMap = {}

export const inputParams = {
  "enabled": z.boolean().describe("Indicates if the discovery manager is enabled").optional(),
  "hostnames": z.string().describe("Hostnames for discovery").optional(),
  "addTxtRecords": z.boolean().describe("Whether to add TXT records").optional(),
  "domainName": z.string().describe("Domain name for discovery").optional()
}