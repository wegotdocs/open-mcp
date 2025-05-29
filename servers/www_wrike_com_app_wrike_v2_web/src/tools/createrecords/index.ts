import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createrecords",
  "toolDescription": "Create some new records",
  "baseUrl": "https://www.wrike.com/app/wrike_v2_web",
  "path": "/public/api/v1/databases/{databaseId}/records",
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
      "databaseId": "databaseId"
    },
    "query": {
      "fieldIds": "fieldIds"
    },
    "body": {
      "requestId": "requestId",
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool