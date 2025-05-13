import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatestatus_1",
  "toolDescription": "修改菜单状态",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/menu/updateStatus",
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
      "menuId": "menuId",
      "enable": "enable"
    }
  },
  inputParamsSchema
}

export default tool