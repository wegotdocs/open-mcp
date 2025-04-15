import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getendpoint",
  "toolDescription": "Get endpoint by ID",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/endpoints/{endpointId}",
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
      "endpointId": "endpointId"
    }
  },
  inputParamsSchema
}

export default tool