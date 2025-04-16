import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listmessages",
  "toolDescription": "Returns a list of messages for a given thread.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/messages",
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
      "before": "before",
      "run_id": "run_id"
    }
  },
  inputParamsSchema
}

export default tool