import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getforwardaddresses",
  "toolDescription": "Get a list of email addresses",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/email/forward",
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
    "query": {
      "useCaseId": "useCaseId"
    },
    "body": {
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool