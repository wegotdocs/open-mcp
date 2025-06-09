import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accounting_removedocument",
  "toolDescription": "",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/accounting-accounts/remove-document",
  "method": "delete",
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
    "query": {
      "account_id": "account_id"
    }
  },
  inputParamsSchema
}

export default tool