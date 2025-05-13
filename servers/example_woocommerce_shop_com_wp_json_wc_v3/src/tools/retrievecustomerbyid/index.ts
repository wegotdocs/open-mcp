import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievecustomerbyid",
  "toolDescription": "This API lets you retrieve and view a specific customer by ID.",
  "baseUrl": "https://example-woocommerce-shop.com/wp-json/wc/v3",
  "path": "/customers/{customerId}",
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
    "path": {
      "customerId": "customerId"
    }
  },
  inputParamsSchema
}

export default tool