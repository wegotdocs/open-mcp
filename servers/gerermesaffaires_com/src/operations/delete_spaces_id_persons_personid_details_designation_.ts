import { z } from "zod"

export const toolName = `delete_spaces_id_persons_personid_details_designation_`
export const toolDescription = `delete a contact detail for a person`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/persons/{personId}/details/{designation}`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "personId": z.string().describe("Id of the person or memberId"), "designation": z.string().describe("designation") }).optional() }).shape