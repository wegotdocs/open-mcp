import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "notifications_delete_all_destroy",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/notifications/delete-all/",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "recipient": "recipient",
      "team": "team"
    }
  },
  inputParamsSchema
}

export default tool