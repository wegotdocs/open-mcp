import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveintegrationbyid",
  "toolDescription": "Retrieve Integration by ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/integrations/{integrationId}",
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
      "integrationId": "integrationId"
    }
  },
  inputParamsSchema
}

export default tool