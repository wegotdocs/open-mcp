import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postsettings",
  "toolDescription": "Insert chat key-value pair inside a common transaction.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/settings",
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
      "key": "key",
      "value": "value",
      "visible": "visible",
      "useCaseId": "useCaseId"
    }
  },
  inputParamsSchema
}

export default tool