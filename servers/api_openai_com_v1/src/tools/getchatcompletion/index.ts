import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchatcompletion",
  "toolDescription": "Get a stored chat completion. Only Chat Completions that have been created\nwith the `store` parameter set to `true` will be returned.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/chat/completions/{completion_id}",
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
    }
  },
  inputParamsSchema
}

export default tool