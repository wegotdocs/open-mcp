import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignvacationconfigurationtoemployee",
  "toolDescription": "Assigns a vacation configuration to an employee",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/vacation-configurations-assignations/{vacationConfigurationId}",
  "method": "post",
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
    "body": {
      "employeeId": "employeeId",
      "year": "year"
    }
  },
  inputParamsSchema
}

export default tool