import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "connectionquery",
  "toolDescription": "Query connections",
  "baseUrl": "http://localhost:21721",
  "path": "/connection/query",
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
      "categoryFilter": "categoryFilter",
      "connectionFilter": "connectionFilter",
      "typeFilter": "typeFilter"
    }
  },
  inputParamsSchema
}

export default tool