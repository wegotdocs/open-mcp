import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieverawpointhistories",
  "toolDescription": "Retrieve raw Histories by Point ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/points/{pointId}/histories/raw",
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
    },
    "query": {
      "from": "from",
      "to": "to",
      "lastObservation": "lastObservation",
      "convertTo": "convertTo"
    }
  },
  inputParamsSchema
}

export default tool