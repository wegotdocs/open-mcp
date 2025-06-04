import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createworkentry",
  "toolDescription": "Create Work Entry",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/work-entries",
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
    "body": {
      "employeeId": "employeeId",
      "workEntryType": "workEntryType",
      "workBreakId": "workBreakId",
      "workCheckTypeId": "workCheckTypeId",
      "workEntryIn": "workEntryIn",
      "workEntryOut": "workEntryOut"
    }
  },
  inputParamsSchema
}

export default tool