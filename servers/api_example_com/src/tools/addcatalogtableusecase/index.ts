import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addcatalogtableusecase",
  "toolDescription": "Assign tables to useCase",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/catalog/{catalogId}/usecase/{useCaseId}/tables",
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
    "path": {
      "catalogId": "catalogId",
      "useCaseId": "useCaseId"
    },
    "body": {
      "catalogTableUseCaseIds": "catalogTableUseCaseIds",
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool