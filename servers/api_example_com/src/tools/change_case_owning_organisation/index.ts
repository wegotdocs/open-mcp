import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_case_owning_organisation",
  "toolDescription": "Update the current owner of the case. Beware, the current organisation could lose access to the case if no profile is set",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/case/{caseId}/owner",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "THEHIVE-SESSION",
      "value": "<mcp-env-var>THEHIVE_SESSION</mcp-env-var>",
      "in": "cookie",
      "envVarName": "THEHIVE_SESSION"
    }
  ],
  "paramsMap": {
    "path": {
      "caseId": "caseId"
    },
    "body": {
      "organisation": "organisation",
      "keepProfile": "keepProfile",
      "taskRule": "taskRule",
      "observableRule": "observableRule"
    }
  },
  inputParamsSchema
}

export default tool