import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatestatus",
  "toolDescription": "修改用户状态",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/user/updateStatus",
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
      "userId": "userId",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool