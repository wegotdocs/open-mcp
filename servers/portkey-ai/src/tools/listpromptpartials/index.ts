import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listpromptpartials",
  "toolDescription": "List prompt partials",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts/partials",
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
      "collection_id": "collection_id"
    }
  },
  inputParamsSchema
}

export default tool