import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletesettings",
  "toolDescription": "Delete chat setting by key and UseCaseId.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/settings",
  "method": "delete",
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
      "key": "key",
      "useCaseId": "useCaseId"
    }
  },
  inputParamsSchema
}

export default tool