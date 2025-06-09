import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accounting_attachdocument",
  "toolDescription": "",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/accounting-accounts/attach",
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
      "account_id": "account_id",
      "file": "file"
    }
  },
  inputParamsSchema
}

export default tool