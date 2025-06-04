import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievevacationconfiguration",
  "toolDescription": "Retrieve a vacation configuration",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/vacation-configurations/{vacationConfigurationId}",
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
    }
  },
  inputParamsSchema
}

export default tool