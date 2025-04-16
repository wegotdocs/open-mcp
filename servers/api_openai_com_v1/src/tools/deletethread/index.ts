import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletethread",
  "toolDescription": "Delete a thread.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool