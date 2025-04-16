import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "modifythread",
  "toolDescription": "Modifies a thread.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}",
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
      "thread_id": "thread_id"
    },
    "body": {
      "tool_resources": "tool_resources",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool