import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listinputitems",
  "toolDescription": "Returns a list of input items for a given response.",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/responses/{response_id}/input_items",
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
    "path": {
      "response_id": "response_id"
    },
    "query": {
      "limit": "limit",
      "order": "order",
      "after": "after",
      "before": "before"
    }
  },
  inputParamsSchema
}

export default tool