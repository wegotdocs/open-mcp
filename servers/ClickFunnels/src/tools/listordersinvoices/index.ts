import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listordersinvoices",
  "toolDescription": "List Invoices",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/orders/{order_id}/invoices",
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
      "order_id": "order_id"
    },
    "query": {
      "after": "after",
      "sort_order": "sort_order",
      "sort_property": "sort_property",
      "filter": "filter"
    }
  },
  inputParamsSchema
}

export default tool