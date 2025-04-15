import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletepromptpartial",
  "toolDescription": "Delete a prompt partial",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts/partials/{promptPartialId}",
  "method": "delete",
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
      "promptPartialId": "promptPartialId"
    }
  },
  inputParamsSchema
}

export default tool