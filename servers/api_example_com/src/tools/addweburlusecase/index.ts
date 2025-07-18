import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addweburlusecase",
  "toolDescription": "Assign web to useCase",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/web/usecase/{useCaseId}",
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
      "useCaseId": "useCaseId"
    },
    "body": {
      "webIds": "webIds"
    }
  },
  inputParamsSchema
}

export default tool