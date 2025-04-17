import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveintegrationsbyorganisationid",
  "toolDescription": "Retrieve Integrations by Organisation ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organisations/{organisationId}/integrations",
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
    }
  },
  inputParamsSchema
}

export default tool