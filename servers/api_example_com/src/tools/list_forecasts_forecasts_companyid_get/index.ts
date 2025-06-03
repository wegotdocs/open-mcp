import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_forecasts_forecasts_companyid_get",
  "toolDescription": "List forecasts",
  "baseUrl": "https://api.example.com",
  "path": "/forecasts/{companyId}",
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
    "path": {
      "companyId": "companyId"
    },
    "query": {
      "scenarioId": "scenarioId",
      "sync": "sync",
      "operations": "operations",
      "startDate": "startDate",
      "endDate": "endDate",
      "limit": "limit",
      "nextPageToken": "nextPageToken"
    }
  },
  inputParamsSchema
}

export default tool