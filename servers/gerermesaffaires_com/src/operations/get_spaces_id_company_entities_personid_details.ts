import { z } from "zod"

export const toolName = `get_spaces_id_company_entities_personid_details`
export const toolDescription = `Returns all details of a company entity`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/company-entities/{personId}/details`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "personId": z.string().describe("Id of the company entity to get") }).optional() }).shape