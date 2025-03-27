import { z } from "zod"

export const toolName = `get_registration`
export const toolDescription = `Returns the method to get the validation code or the link to register after invitation`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/registration`
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

export const inputParams = z.object({ "query": z.object({ "Code": z.string().describe("Code of the invitation") }).optional() }).shape