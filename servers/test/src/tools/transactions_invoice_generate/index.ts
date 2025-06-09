import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transactions_invoice_generate",
  "toolDescription": "ინვოისის გენერაცია ოპერაციის აიდის მიხედვით",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{locale}/transactions/invoice/{operationId}",
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
      "locale": "locale",
      "operationId": "operationId"
    }
  },
  inputParamsSchema
}

export default tool