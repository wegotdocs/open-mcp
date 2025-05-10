import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "move_flows_id_patch",
  "toolDescription": "Move Flow",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/flows/{id}",
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
      "id": "id"
    },
    "body": {
      "path": "path",
      "name": "name",
      "directory_id": "directory_id"
    }
  },
  inputParamsSchema
}

export default tool