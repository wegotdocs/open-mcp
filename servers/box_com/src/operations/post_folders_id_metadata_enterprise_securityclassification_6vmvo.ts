import { z } from "zod"

export const toolName = `post_folders_id_metadata_enterprise_securityclassification_6vmvo`
export const toolDescription = `Add classification to folder`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
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

export const inputParams = z.object({ "path": z.object({ "folder_id": z.string().describe("The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.") }).optional(), "body": z.object({ "Box__Security__Classification__Key": z.string().describe("The name of the classification to apply to this folder.\n\nTo list the available classifications in an enterprise,\nuse the classification API to retrieve the\n[classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)\nwhich lists all available classification keys.").optional() }).optional() }).shape