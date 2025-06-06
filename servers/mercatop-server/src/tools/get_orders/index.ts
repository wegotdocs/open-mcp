import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_orders",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/orders",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "query": {
      "context": "context",
      "page": "page",
      "per_page": "per_page",
      "search": "search",
      "after": "after",
      "before": "before",
      "modified_after": "modified_after",
      "modified_before": "modified_before",
      "dates_are_gmt": "dates_are_gmt",
      "exclude": "exclude",
      "include": "include",
      "offset": "offset",
      "order": "order",
      "orderby": "orderby",
      "parent": "parent",
      "parent_exclude": "parent_exclude",
      "status": "status",
      "customer": "customer",
      "product": "product",
      "dp": "dp"
    }
  },
  inputParamsSchema
}

export default tool