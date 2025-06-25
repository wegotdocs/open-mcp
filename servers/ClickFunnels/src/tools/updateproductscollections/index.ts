import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateproductscollections",
  "toolDescription": "Update Collection",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/products/collections/{id}",
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
      "products_collection": "products_collection"
    }
  },
  inputParamsSchema
}

export default tool