import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateworkentry",
  "toolDescription": "Update Work Entry",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/work-entries/{id}",
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
      "id": "id"
    },
    "body": {
      "workEntryType": "workEntryType",
      "workEntryIn": "workEntryIn",
      "workEntryOut": "workEntryOut"
    }
  },
  inputParamsSchema
}

export default tool