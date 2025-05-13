import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reportsalessummary",
  "toolDescription": "This API lets you retrieve and view a sales report.",
  "baseUrl": "https://example-woocommerce-shop.com/wp-json/wc/v3",
  "path": "/reports/sales",
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
      "period": "period",
      "date_min": "date_min",
      "date_max": "date_max"
    }
  },
  inputParamsSchema
}

export default tool