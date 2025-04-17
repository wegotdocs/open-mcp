import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "duplicatepoint",
  "toolDescription": "Duplicate Point",
  "baseUrl": "https://api.example.com",
  "path": "/v2/points/{pointId}/duplicate",
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
    "path": {
      "pointId": "pointId"
    },
    "body": {
      "name": "name",
      "duplicateDataStreamMappings": "duplicateDataStreamMappings",
      "equipId": "equipId"
    }
  },
  inputParamsSchema
}

export default tool