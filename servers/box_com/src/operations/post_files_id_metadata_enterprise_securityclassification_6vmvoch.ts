import { z } from "zod"

export const toolName = `post_files_id_metadata_enterprise_securityclassification_6vmvoch`
export const toolDescription = `Add classification to file`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
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

export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.") }).optional(), "body": z.object({ "Box__Security__Classification__Key": z.string().describe("The name of the classification to apply to this file.\n\nTo list the available classifications in an enterprise,\nuse the classification API to retrieve the\n[classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)\nwhich lists all available classification keys.").optional() }).optional() }).shape