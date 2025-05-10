import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_tool_version_tools_id_versions_version_id_patch",
  "toolDescription": "Update Tool Version",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/tools/{id}/versions/{version_id}",
  "method": "patch",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "version_id": "version_id"
    },
    "body": {
      "name": "name",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool