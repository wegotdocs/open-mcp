import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_1",
  "toolDescription": "添加角色",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/role/add",
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