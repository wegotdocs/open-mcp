import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findrecords",
  "toolDescription": "Get the database records along with requested fields values",
  "baseUrl": "https://www.wrike.com/app/wrike_v2_web",
  "path": "/public/api/v1/databases/{databaseId}/records",
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
      "databaseId": "databaseId"
    },
    "query": {
      "Pagination": "Pagination",
      "recordIds": "recordIds",
      "filter": "filter",
      "searchQuery": "searchQuery",
      "fieldIds": "fieldIds"
    }
  },
  inputParamsSchema
}

export default tool