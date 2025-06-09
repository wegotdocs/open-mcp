import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accounting_getdocument",
  "toolDescription": "",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/accounting-accounts/get-document",
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
      "document_name": "document_name"
    }
  },
  inputParamsSchema
}

export default tool