import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findbyusername",
  "toolDescription": "Find user by username",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/users/by-username/{username}",
  "method": "get",
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
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool