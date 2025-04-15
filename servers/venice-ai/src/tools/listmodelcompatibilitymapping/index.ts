import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listmodelcompatibilitymapping",
  "toolDescription": "/api/v1/models/compatibility_mapping",
  "baseUrl": "https://api.venice.ai/api/v1",
  "path": "/models/compatibility_mapping",
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
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool