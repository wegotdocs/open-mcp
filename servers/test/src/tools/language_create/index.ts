import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "language_create",
  "toolDescription": "ენის დამატება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{language}/languages/create",
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
      "name": "name",
      "code": "code"
    }
  },
  inputParamsSchema
}

export default tool