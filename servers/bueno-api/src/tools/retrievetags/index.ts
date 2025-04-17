import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievetags",
  "toolDescription": "Retrieve Tags",
  "baseUrl": "https://api.example.com",
  "path": "/v2/tags",
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
      "nodeType": "nodeType",
      "type": "type",
      "classId": "classId"
    }
  },
  inputParamsSchema
}

export default tool