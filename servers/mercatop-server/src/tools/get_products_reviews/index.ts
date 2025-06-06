import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_products_reviews",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/products/reviews",
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
      "exclude": "exclude",
      "include": "include",
      "offset": "offset",
      "order": "order",
      "orderby": "orderby",
      "reviewer": "reviewer",
      "reviewer_exclude": "reviewer_exclude",
      "reviewer_email": "reviewer_email",
      "product": "product",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool