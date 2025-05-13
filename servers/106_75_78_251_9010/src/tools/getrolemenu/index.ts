import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrolemenu",
  "toolDescription": "分配角色时, 查询当前角色的菜单和权限",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/role/getRoleMenu/{id}",
  "method": "get",
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