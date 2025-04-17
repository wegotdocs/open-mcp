import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievecommentsforaction",
  "toolDescription": "Retrieve Comments by Organisation ID and Action ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organisations/{organisationId}/actions/{actionId}/comments",
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
      "organisationId": "organisationId",
      "actionId": "actionId"
    }
  },
  inputParamsSchema
}

export default tool