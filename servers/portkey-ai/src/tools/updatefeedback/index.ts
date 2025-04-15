import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefeedback",
  "toolDescription": "Updates existing feedback",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/feedback/{id}",
  "method": "put",
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
      "id": "id"
    },
    "body": {
      "value": "value",
      "weight": "weight",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool