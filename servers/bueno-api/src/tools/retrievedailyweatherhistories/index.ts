import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievedailyweatherhistories",
  "toolDescription": "Retrieve aggregated Point histories by Weather Metric and Site ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/sites/{siteId}/weather/{metricId}/histories/daily",
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
      "siteId": "siteId",
      "metricId": "metricId"
    },
    "query": {
      "from": "from",
      "to": "to",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool