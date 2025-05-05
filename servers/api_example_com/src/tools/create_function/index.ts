import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_function",
  "toolDescription": "Create a function that can then be invoked from an endpoint on TheHive.\nThis function will be able to format and process your data in a custom manner and invoke TheHive APIs.\nAll TheHive APIs will be called with the role and permissions of",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/function",
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
    "body": {
      "name": "name",
      "mode": "mode",
      "definition": "definition",
      "description": "description",
      "config": "config",
      "types": "types"
    }
  },
  inputParamsSchema
}

export default tool