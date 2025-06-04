import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateworkdaytypeincontract",
  "toolDescription": "Update a workday type",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/workday-types/{workdayTypeId}",
  "method": "put",
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
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool