import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "language_update",
  "toolDescription": "ენის განახლება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{language}/languages/update",
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
      "id": "id",
      "name": "name",
      "code": "code",
      "main": "main",
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool