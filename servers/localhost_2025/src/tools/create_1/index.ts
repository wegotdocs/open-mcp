import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_1",
  "toolDescription": "[新增]创建单条记录",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/pre_order",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "userId": "userId",
      "phoneNumber": "phoneNumber",
      "name": "name",
      "contractAmount": "contractAmount",
      "approvalStatus": "approvalStatus"
    }
  },
  inputParamsSchema
}

export default tool