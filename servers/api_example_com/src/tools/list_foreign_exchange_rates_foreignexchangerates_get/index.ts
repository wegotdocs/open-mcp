import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_foreign_exchange_rates_foreignexchangerates_get",
  "toolDescription": "List foreign exchange rates",
  "baseUrl": "https://api.example.com",
  "path": "/foreignexchangerates",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "baseCurrency": "baseCurrency",
      "startDate": "startDate",
      "endDate": "endDate",
      "limit": "limit",
      "nextPageToken": "nextPageToken"
    }
  },
  inputParamsSchema
}

export default tool