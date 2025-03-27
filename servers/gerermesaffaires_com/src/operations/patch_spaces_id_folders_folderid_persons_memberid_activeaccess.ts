import { z } from "zod"

export const toolName = `patch_spaces_id_folders_folderid_persons_memberid_activeaccess`
export const toolDescription = `open an access`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/folders/{folderId}/persons/{memberId}/activeaccess`
export const method = `patch`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "memberId": z.string().describe("memberId of the person"), "folderId": z.string().describe("id of the customer folder") }).optional() }).shape