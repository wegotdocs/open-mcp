import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "modifyrun",
  "toolDescription": "Modifies a run.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/runs/{run_id}",
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
    },
    "body": {
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool