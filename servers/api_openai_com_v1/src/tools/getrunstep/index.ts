import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrunstep",
  "toolDescription": "Retrieves a run step.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/runs/{run_id}/steps/{step_id}",
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
      "run_id": "run_id",
      "step_id": "step_id"
    },
    "query": {
      "include[]": "include[]"
    }
  },
  inputParamsSchema
}

export default tool