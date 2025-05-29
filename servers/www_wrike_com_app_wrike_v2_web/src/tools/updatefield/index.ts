import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefield",
  "toolDescription": "Update an existing database field (property)",
  "baseUrl": "https://www.wrike.com/app/wrike_v2_web",
  "path": "/public/api/v1/databases/{databaseId}/fields/{fieldId}",
  "method": "patch",
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
      "databaseId": "databaseId",
      "fieldId": "fieldId"
    }
  },
  inputParamsSchema
}

export default tool