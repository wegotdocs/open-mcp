import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatelabel",
  "toolDescription": "Update a label",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/labels/{labelId}",
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
      "labelId": "labelId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "color_code": "color_code"
    }
  },
  inputParamsSchema
}

export default tool