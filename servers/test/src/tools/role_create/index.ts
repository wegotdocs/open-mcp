import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "role_create",
  "toolDescription": "დამატება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{language}/roles",
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
    "path": {
      "language": "language"
    },
    "body": {
      "id": "id",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool