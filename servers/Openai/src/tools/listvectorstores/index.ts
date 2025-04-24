import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listvectorstores",
  "toolDescription": "Returns a list of vector stores.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/vector_stores",
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
      "limit": "limit",
      "order": "order",
      "after": "after",
      "before": "before"
    }
  },
  inputParamsSchema
}

export default tool