import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deskphones_users_delete",
  "toolDescription": "Desk Phone -- Delete",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/users/{parent_id}/deskphones/{id}",
  "method": "delete",
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
      "id": "id",
      "parent_id": "parent_id"
    }
  },
  inputParamsSchema
}

export default tool