import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_api_v1_role_get",
  "toolDescription": "Search",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/role",
  "method": "get",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "query": {
      "created_after": "created_after",
      "created_before": "created_before",
      "enabled": "enabled",
      "limit": "limit",
      "name_contains": "name_contains",
      "offset": "offset",
      "updated_after": "updated_after",
      "updated_before": "updated_before",
      "username_contains": "username_contains"
    }
  },
  inputParamsSchema
}

export default tool