import { z } from "zod"

export const toolName = `delete_business_groups_id_spaces_spaceid_`
export const toolDescription = `Remove a customer space from partner`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/business-groups/{id}/spaces/{spaceId}`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the group of the customer space"), "spaceId": z.string().describe("Id of the space") }).optional() }).shape