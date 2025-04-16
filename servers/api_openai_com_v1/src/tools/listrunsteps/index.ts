import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listrunsteps",
  "toolDescription": "Returns a list of run steps belonging to a run.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/runs/{run_id}/steps",
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
      "thread_id": "thread_id",
      "run_id": "run_id"
    },
    "query": {
      "limit": "limit",
      "order": "order",
      "after": "after",
      "before": "before",
      "include[]": "include[]"
    }
  },
  inputParamsSchema
}

export default tool