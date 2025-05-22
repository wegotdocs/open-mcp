import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_update_active_call",
  "toolDescription": "Call Recording -- Toggle",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/users/{id}/activecall",
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
      "is_recording": "is_recording",
      "play_message": "play_message",
      "recording_type": "recording_type"
    }
  },
  inputParamsSchema
}

export default tool