import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "modifymessage",
  "toolDescription": "Modifies a message.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/messages/{message_id}",
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
      "message_id": "message_id"
    },
    "body": {
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool