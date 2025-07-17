import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editfield",
  "toolDescription": "Modify Person Field",
  "baseUrl": "https://api.encharge.io/v1",
  "path": "/fields/{fieldName}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "fieldName": "fieldName"
    },
    "body": {
      "name": "name",
      "title": "title",
      "type": "type",
      "format": "format",
      "readOnly": "readOnly",
      "tooltip": "tooltip",
      "icon": "icon",
      "array": "array",
      "canMapFrom": "canMapFrom",
      "firstClassField": "firstClassField",
      "createdBy": "createdBy"
    }
  },
  inputParamsSchema
}

export default tool