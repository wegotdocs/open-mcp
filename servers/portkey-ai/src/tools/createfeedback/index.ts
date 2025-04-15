import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfeedback",
  "toolDescription": "Create new feedback",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/feedback",
  "method": "post",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "trace_id": "trace_id",
      "value": "value",
      "weight": "weight",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool