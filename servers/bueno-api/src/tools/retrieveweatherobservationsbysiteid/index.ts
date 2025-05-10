import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveweatherobservationsbysiteid",
  "toolDescription": "Retrieve Weather Observations by Site ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/sites/{siteId}/weather",
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
      "siteId": "siteId"
    },
    "query": {
      "from": "from",
      "to": "to",
      "aggregateType": "aggregateType",
      "unitSystem": "unitSystem"
    }
  },
  inputParamsSchema
}

export default tool