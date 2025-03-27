import { z } from "zod"

export const toolName = `post_spaces_id_persons_personid_portfolios`
export const toolDescription = `Create a portfolio for the person personId`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/persons/{personId}/portfolios`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "personId": z.string().describe("Id of the person who will be the owner of the portfolio") }).optional(), "body": z.string().optional() }).shape