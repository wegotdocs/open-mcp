import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_a_key",
  "toolDescription": "Create a key",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/pix/addressKeys",
  "method": "post",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool