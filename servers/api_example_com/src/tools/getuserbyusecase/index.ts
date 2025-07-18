import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserbyusecase",
  "toolDescription": "Get current user of the use case",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/useCase/{useCaseId}/user",
  "method": "get",
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
      "useCaseId": "useCaseId"
    }
  },
  inputParamsSchema
}

export default tool