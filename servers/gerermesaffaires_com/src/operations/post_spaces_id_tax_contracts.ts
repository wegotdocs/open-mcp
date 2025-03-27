import { z } from "zod"

export const toolName = `post_spaces_id_tax_contracts`
export const toolDescription = `Create a tax contract for the space`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/tax-contracts`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space") }).optional(), "body": z.string().optional() }).shape