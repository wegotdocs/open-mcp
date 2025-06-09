import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_transaction",
  "toolDescription": "ოპერაციის განახლება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{locale}/transactions/update-operation/{id}",
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
      "locale": "locale",
      "id": "id"
    },
    "body": {
      "operations": "operations"
    }
  },
  inputParamsSchema
}

export default tool