import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_mobile_recharges",
  "toolDescription": "List cell phone top-ups",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/mobilePhoneRecharges",
  "method": "get",
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
      "offset": "offset",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool