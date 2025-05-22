import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update",
  "toolDescription": "[更新]更新记录",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/pre_order",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
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