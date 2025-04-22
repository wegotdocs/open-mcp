import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getresponse",
  "toolDescription": "Retrieves a model response with the given ID.",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/responses/{response_id}",
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
      "include": "include"
    }
  },
  inputParamsSchema
}

export default tool