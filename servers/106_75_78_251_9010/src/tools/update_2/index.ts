import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_2",
  "toolDescription": "修改角色",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/role/update",
  "method": "post",
  "security": [
    {
      "key": "X-Tenant-Id",
      "value": "<mcp-env-var>X_TENANT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "X_TENANT_ID"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "code": "code",
      "status": "status",
      "description": "description",
      "warehouseCodes": "warehouseCodes"
    }
  },
  inputParamsSchema
}

export default tool