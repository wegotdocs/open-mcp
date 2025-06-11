import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "collectionscreate",
  "toolDescription": "Create a collection",
  "baseUrl": "https://app.getoutline.com/api",
  "path": "/collections.create",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "description": "description",
      "permission": "permission",
      "icon": "icon",
      "color": "color",
      "sharing": "sharing"
    }
  },
  inputParamsSchema
}

export default tool