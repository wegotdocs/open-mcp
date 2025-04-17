import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorganisation",
  "toolDescription": "Create Organisation",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organisations",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "key": "key",
      "name": "name",
      "timezone": "timezone"
    }
  },
  inputParamsSchema
}

export default tool