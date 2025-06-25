import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateproductsvariants",
  "toolDescription": "Update Variant",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/products/variants/{id}",
  "method": "put",
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
      "id": "id"
    },
    "body": {
      "products_variant": "products_variant"
    }
  },
  inputParamsSchema
}

export default tool