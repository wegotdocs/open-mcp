import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_for_cell_phone_provider",
  "toolDescription": "Search for cell phone provider",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/mobilePhoneRecharges/{phoneNumber}/provider",
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
    "path": {
      "phoneNumber": "phoneNumber"
    }
  },
  inputParamsSchema
}

export default tool