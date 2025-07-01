import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_status_of_automatic_anticipation",
  "toolDescription": "Update status of automatic anticipation",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/anticipations/configurations",
  "method": "put",
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
      "creditCardAutomaticEnabled": "creditCardAutomaticEnabled"
    }
  },
  inputParamsSchema
}

export default tool