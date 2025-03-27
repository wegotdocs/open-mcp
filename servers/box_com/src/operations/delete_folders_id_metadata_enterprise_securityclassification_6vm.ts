import { z } from "zod"

export const toolName = `delete_folders_id_metadata_enterprise_securityclassification_6vm`
export const toolDescription = `Remove classification from folder`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
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

export const inputParams = z.object({ "path": z.object({ "folder_id": z.string().describe("The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.") }).optional() }).shape