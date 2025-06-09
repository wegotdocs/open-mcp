import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "product_deleteproductionitem",
  "toolDescription": "წარმოების წაშლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/product/delete-productions",
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
      "to_account": "to_account",
      "account_number": "account_number"
    }
  },
  inputParamsSchema
}

export default tool