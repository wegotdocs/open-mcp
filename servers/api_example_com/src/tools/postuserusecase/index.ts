import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postuserusecase",
  "toolDescription": "Insert User to handle UseCase",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/userUseCase",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "userADId": "userADId",
      "userName": "userName",
      "rolId": "rolId",
      "useCaseId": "useCaseId"
    }
  },
  inputParamsSchema
}

export default tool