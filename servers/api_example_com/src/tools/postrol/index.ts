import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postrol",
  "toolDescription": "Insert role into the database",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/rol",
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
      "rolName": "rolName"
    }
  },
  inputParamsSchema
}

export default tool