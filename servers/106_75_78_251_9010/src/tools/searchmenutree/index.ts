import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchmenutree",
  "toolDescription": "查询菜单树(前端使用)",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/currentUser/searchMenuTree",
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
    "query": {
      "pageIndex": "pageIndex",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool