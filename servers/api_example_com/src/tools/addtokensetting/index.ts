import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addtokensetting",
  "toolDescription": "Add new TokenSetting.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/token/setting",
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
      "entityId": "entityId",
      "useCaseId": "useCaseId",
      "numberTokens": "numberTokens",
      "entityTypeId": "entityTypeId",
      "timeIntervalId": "timeIntervalId"
    }
  },
  inputParamsSchema
}

export default tool