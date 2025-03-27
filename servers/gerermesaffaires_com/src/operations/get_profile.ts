import { z } from "zod"

export const toolName = `get_profile`
export const toolDescription = `Returns status of member`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/profile`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "Contract": z.string().describe("to get a contract (if not signed error 404 + html contract)").optional() }).optional() }).shape