import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cancelrun",
  "toolDescription": "Cancels a run that is `in_progress`.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/runs/{run_id}/cancel",
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
      "thread_id": "thread_id",
      "run_id": "run_id"
    }
  },
  inputParamsSchema
}

export default tool