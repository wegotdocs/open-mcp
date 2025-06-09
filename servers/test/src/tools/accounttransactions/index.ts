import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accounttransactions",
  "toolDescription": "გატარებები",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/transactions/account",
  "method": "get",
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
      "to_date": "to_date",
      "account_number": "account_number",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool