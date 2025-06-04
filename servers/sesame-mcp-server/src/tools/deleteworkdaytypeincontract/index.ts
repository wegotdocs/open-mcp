import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteworkdaytypeincontract",
  "toolDescription": "Delete a workday type",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/workday-types/{workdayTypeId}",
  "method": "delete",
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
      "workdayTypeId": "workdayTypeId"
    }
  },
  inputParamsSchema
}

export default tool