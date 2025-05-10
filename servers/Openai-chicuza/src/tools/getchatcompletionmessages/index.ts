import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchatcompletionmessages",
  "toolDescription": "Get the messages in a stored chat completion. Only Chat Completions that\nhave been created with the `store` parameter set to `true` will be\nreturned.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/chat/completions/{completion_id}/messages",
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
      "completion_id": "completion_id"
    },
    "query": {
      "after": "after",
      "limit": "limit",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool