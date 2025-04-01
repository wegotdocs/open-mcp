import { z } from "zod"

export const toolName = `verifysubdomainavailability`
export const toolDescription = `Verify Subdomain Availability`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/accounts/available`
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

export const inputParams = z.object({ "query": z.object({ "subdomain": z.string().describe("Specify the name of the subdomain you want to verify. The name can't contain underscores, hyphens, or spaces.\n") }).optional() }).shape