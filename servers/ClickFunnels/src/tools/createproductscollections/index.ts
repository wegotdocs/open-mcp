import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createproductscollections",
  "toolDescription": "Create Collection",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/workspaces/{workspace_id}/products/collections",
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
      "workspace_id": "workspace_id"
    },
    "body": {
      "products_collection": "products_collection"
    }
  },
  inputParamsSchema
}

export default tool