import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletemessage",
  "toolDescription": "Deletes a message.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/messages/{message_id}",
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
      "thread_id": "thread_id",
      "message_id": "message_id"
    }
  },
  inputParamsSchema
}

export default tool