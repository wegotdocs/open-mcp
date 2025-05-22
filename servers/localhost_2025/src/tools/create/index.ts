import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create",
  "toolDescription": "[新增]创建单条记录",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/ad",
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
      "title": "title",
      "content": "content",
      "url": "url",
      "status": "status",
      "redirectType": "redirectType",
      "redirectUrl": "redirectUrl"
    }
  },
  inputParamsSchema
}

export default tool