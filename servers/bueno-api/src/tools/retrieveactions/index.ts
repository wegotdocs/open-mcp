import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveactions",
  "toolDescription": "Retrieve Actions by Organisation ID and Optional Filters",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organisations/{organisationId}/actions",
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
      "organisationId": "organisationId"
    },
    "query": {
      "ids": "ids",
      "siteIds": "siteIds",
      "statusIds": "statusIds",
      "updatedBefore": "updatedBefore",
      "updatedAfter": "updatedAfter",
      "createdBefore": "createdBefore",
      "createdAfter": "createdAfter",
      "closedBefore": "closedBefore",
      "closedAfter": "closedAfter"
    }
  },
  inputParamsSchema
}

export default tool