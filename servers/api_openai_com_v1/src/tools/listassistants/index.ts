import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listassistants",
  "toolDescription": "Returns a list of assistants.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/assistants",
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