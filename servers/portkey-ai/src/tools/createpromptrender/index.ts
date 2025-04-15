import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpromptrender",
  "toolDescription": "Prompts Render",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts/{promptId}/render",
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
    "path": {
      "promptId": "promptId"
    }
  },
  inputParamsSchema
}

export default tool