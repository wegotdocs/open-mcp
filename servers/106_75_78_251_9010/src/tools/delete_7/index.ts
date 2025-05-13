import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_7",
  "toolDescription": "删除菜单",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/menu/{id}",
  "method": "delete",
  "security": [
    {
      "key": "X-Tenant-Id",
      "value": "<mcp-env-var>X_TENANT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "X_TENANT_ID"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool