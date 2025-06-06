import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_products_attributes",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/products/attributes",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "slug": "slug",
      "type": "type",
      "order_by": "order_by",
      "has_archives": "has_archives"
    }
  },
  inputParamsSchema
}

export default tool