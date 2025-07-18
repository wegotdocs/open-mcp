import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecatalogtableusecase",
  "toolDescription": "Active or desactive catalog table in useCase.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/catalog/table/{catalogTableId}/usecase/{useCaseId}",
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
      "catalogTableId": "catalogTableId",
      "useCaseId": "useCaseId"
    },
    "body": {
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool