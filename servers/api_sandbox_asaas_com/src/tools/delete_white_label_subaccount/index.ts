import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_white_label_subaccount",
  "toolDescription": "Delete White Label subaccount",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/myAccount/",
  "method": "delete",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "removeReason": "removeReason"
    }
  },
  inputParamsSchema
}

export default tool