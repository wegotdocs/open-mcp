import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createproductsvariants",
  "toolDescription": "Create Variant",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/products/{product_id}/variants",
  "method": "post",
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
    "body": {
      "products_variant": "products_variant"
    }
  },
  inputParamsSchema
}

export default tool