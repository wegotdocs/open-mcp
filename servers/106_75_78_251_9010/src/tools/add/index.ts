import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add",
  "toolDescription": "添加用户",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/user/add",
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
      "roleIds": "roleIds",
      "name": "name",
      "account": "account",
      "status": "status",
      "phone": "phone",
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool