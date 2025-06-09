import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_role",
  "toolDescription": "განახლება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{locale}/roles",
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
      "locale": "locale"
    },
    "body": {
      "id": "id",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool