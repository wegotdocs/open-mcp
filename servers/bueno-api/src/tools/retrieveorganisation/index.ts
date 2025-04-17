import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveorganisation",
  "toolDescription": "Retrieve Organisation by ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organisations/{organisationId}",
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