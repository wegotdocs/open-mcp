import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listproductsvariants",
  "toolDescription": "List Variants",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/products/{product_id}/variants",
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
      "product_id": "product_id"
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