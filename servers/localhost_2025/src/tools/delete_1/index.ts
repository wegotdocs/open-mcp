import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_1",
  "toolDescription": "[删除]彻底删除单条记录",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/pre_order",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool