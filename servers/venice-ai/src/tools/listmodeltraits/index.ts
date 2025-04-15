import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listmodeltraits",
  "toolDescription": "/api/v1/models/traits",
  "baseUrl": "https://api.venice.ai/api/v1",
  "path": "/models/traits",
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