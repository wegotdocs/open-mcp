import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievesitesfororganisation",
  "toolDescription": "Retrieve Sites by Organisation ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organisations/{organisationId}/sites",
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
      "includeDeleted": "includeDeleted"
    }
  },
  inputParamsSchema
}

export default tool