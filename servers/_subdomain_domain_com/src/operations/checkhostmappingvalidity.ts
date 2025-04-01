import { z } from "zod"

export const toolName = `checkhostmappingvalidity`
export const toolDescription = `Check Host Mapping Validity`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/brands/check_host_mapping`
export const method = `get`
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

export const inputParams = z.object({ "query": z.object({ "host_mapping": z.string().describe("The hostmapping to a brand, if any (only admins view this key)"), "subdomain": z.string().describe("Subdomain for a given Zendesk account address") }).optional() }).shape