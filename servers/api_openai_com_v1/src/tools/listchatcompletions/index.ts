import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listchatcompletions",
  "toolDescription": "List stored Chat Completions. Only Chat Completions that have been stored\nwith the `store` parameter set to `true` will be returned.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/chat/completions",
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
    "query": {
      "model": "model",
      "metadata": "metadata",
      "after": "after",
      "limit": "limit",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool