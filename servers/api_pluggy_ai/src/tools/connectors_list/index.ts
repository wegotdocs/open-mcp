import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "connectors_list",
  "toolDescription": "List",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/connectors",
  "method": "get",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "countries": "countries",
      "types": "types",
      "name": "name",
      "sandbox": "sandbox",
      "healthDetails": "healthDetails",
      "isOpenFinance": "isOpenFinance",
      "supportsPaymentInitiation": "supportsPaymentInitiation"
    }
  },
  inputParamsSchema
}

export default tool