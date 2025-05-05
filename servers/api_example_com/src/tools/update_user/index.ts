import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_user",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/user/{userId}",
  "method": "patch",
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
      "userId": "userId"
    },
    "body": {
      "name": "name",
      "organisation": "organisation",
      "profile": "profile",
      "locked": "locked",
      "avatar": "avatar",
      "email": "email",
      "defaultOrganisation": "defaultOrganisation",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool