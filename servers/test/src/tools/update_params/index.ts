import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_params",
  "toolDescription": "პარამეტრების განახლება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/user/{language}/update-params",
  "method": "put",
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
      "language": "language"
    },
    "body": {
      "language": "b_language",
      "dark_mode_enabled": "dark_mode_enabled",
      "double_auth": "double_auth"
    }
  },
  inputParamsSchema
}

export default tool