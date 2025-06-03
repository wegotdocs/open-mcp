import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcurrencyexchangefordate",
  "toolDescription": "Get exchange rates by date",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/currencies/exchange/{date}/{base_currency}",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "date": "date",
      "base_currency": "base_currency"
    },
    "query": {
      "force": "force"
    }
  },
  inputParamsSchema
}

export default tool