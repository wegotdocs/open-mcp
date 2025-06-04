import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editbusinessprofile",
  "toolDescription": "Edit your Business Profile",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/business",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "address": "address",
      "description": "description",
      "email": "email",
      "hours": "hours",
      "websites": "websites"
    }
  },
  inputParamsSchema
}

export default tool