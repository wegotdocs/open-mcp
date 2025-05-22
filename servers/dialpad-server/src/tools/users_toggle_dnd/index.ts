import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_toggle_dnd",
  "toolDescription": "Do Not Disturb -- Toggle",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/users/{id}/togglednd",
  "method": "patch",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "do_not_disturb": "do_not_disturb",
      "group_id": "group_id",
      "group_type": "group_type"
    }
  },
  inputParamsSchema
}

export default tool