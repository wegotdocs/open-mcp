import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "usercontrollerfinduser",
  "toolDescription": "Obtain user by UUID",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/{uuid}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "uuid": "uuid"
    }
  },
  inputParamsSchema
}

export default tool