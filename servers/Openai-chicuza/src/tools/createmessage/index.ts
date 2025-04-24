import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createmessage",
  "toolDescription": "Create a message.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/messages",
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
      "role": "role",
      "content": "content",
      "attachments": "attachments",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool