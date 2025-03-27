import { z } from "zod"

export const toolName = `delete_spaces_id_groups_groupid_persons_memberid_`
export const toolDescription = `Delete a person of a group`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/groups/{groupId}/persons/{memberId}`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "groupId": z.string().describe("Id of the group to modify"), "memberId": z.string().describe("MemberId of the person") }).optional() }).shape