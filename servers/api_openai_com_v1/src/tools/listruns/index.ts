import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listruns",
  "toolDescription": "Returns a list of runs belonging to a thread.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/runs",
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
      "thread_id": "thread_id"
    },
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