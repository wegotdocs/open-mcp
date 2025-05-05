import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "share_a_case",
  "toolDescription": "Share the case with other organisations. \nFor each organisation, you can define a profile (level of access) that the org will receive\n\nThis request will only create new shares and will not update or delete existing shares",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/case/{caseId}/shares",
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
      "shares": "shares"
    }
  },
  inputParamsSchema
}

export default tool