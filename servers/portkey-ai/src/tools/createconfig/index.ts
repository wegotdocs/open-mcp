import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createconfig",
  "toolDescription": "Create a config",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/configs",
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
      "name": "name",
      "config": "config",
      "isDefault": "isDefault",
      "workspace_id": "workspace_id"
    }
  },
  inputParamsSchema
}

export default tool