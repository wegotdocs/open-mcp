import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateusecasevalue",
  "toolDescription": "Update UseCase Value (logical delete)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/useCase/{id}/value",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool