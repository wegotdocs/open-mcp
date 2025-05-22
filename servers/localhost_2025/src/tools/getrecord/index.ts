import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrecord",
  "toolDescription": "[查询]id查询单条记录",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/ad",
  "method": "get",
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