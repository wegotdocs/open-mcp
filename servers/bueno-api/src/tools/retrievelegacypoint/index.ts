import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievelegacypoint",
  "toolDescription": "Retrieve Legacy Point by ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/points/{pointId} (deprecated)",
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
    "path": {
      "pointId": "pointId"
    }
  },
  inputParamsSchema
}

export default tool