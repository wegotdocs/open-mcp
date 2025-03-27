import { z } from "zod"

export const toolName = `delete_spaces_id_groups_groupid_folders_folderid_`
export const toolDescription = `delete access to a folder for a group`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/groups/{groupId}/folders/{folderId}`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "groupId": z.string().describe("Id of the group to modify"), "folderId": z.string().describe("Id of the folder") }).optional() }).shape