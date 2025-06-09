import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_transactions_purchase_order",
  "toolDescription": "რეალიზაციის თემფლეითის წაშლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{locale}/transactions/delete-realization-order/{templateId}",
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
      "locale": "locale",
      "templateId": "templateId"
    }
  },
  inputParamsSchema
}

export default tool