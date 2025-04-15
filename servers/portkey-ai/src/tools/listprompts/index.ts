import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listprompts",
  "toolDescription": "List prompts",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts",
  "method": "get",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "collection_id": "collection_id",
      "workspace_id": "workspace_id",
      "current_page": "current_page",
      "page_size": "page_size",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool