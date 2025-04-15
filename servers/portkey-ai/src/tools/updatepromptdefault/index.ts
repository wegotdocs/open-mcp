import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepromptdefault",
  "toolDescription": "Set a version as the default for a prompt",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts/{promptId}/makedefault",
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
      "promptId": "promptId"
    },
    "body": {
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool