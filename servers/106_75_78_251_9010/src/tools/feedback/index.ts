import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "feedback",
  "toolDescription": "修改密码",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/currentUser/feedback",
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
      "rating": "rating",
      "comment": "comment",
      "contact": "contact"
    }
  },
  inputParamsSchema
}

export default tool