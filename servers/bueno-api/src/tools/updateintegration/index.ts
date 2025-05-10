import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateintegration",
  "toolDescription": "Update Integration",
  "baseUrl": "https://api.example.com",
  "path": "/v2/integrations",
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
    "body": {
      "id": "id",
      "name": "name",
      "organisationId": "organisationId",
      "timezone": "timezone"
    }
  },
  inputParamsSchema
}

export default tool