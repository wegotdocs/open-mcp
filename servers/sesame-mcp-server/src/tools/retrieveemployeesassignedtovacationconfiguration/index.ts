import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveemployeesassignedtovacationconfiguration",
  "toolDescription": "Retrieve employees assigned to a vacation configuration",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/vacation-configurations-assignations/{vacationConfigurationId}",
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
      "vacationConfigurationId": "vacationConfigurationId"
    },
    "query": {
      "year": "year",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool