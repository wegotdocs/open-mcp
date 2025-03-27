import { z } from "zod"

export const toolName = `get_spaces_id_company_entities`
export const toolDescription = `Returns list of company entities`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/company-entities`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space") }).optional(), "query": z.object({ "Name": z.string().describe("Name of the company entity").optional(), "LegalName": z.string().describe("Legal name of the company entity").optional(), "RegistrationNumber": z.string().describe("registration number of the company entity").optional() }).optional() }).shape