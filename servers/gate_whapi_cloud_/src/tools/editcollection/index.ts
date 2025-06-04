import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editcollection",
  "toolDescription": "Edit collection",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/business/collections/{CollectionID}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "CollectionID": "CollectionID"
    },
    "body": {
      "name": "name",
      "remove_products": "remove_products",
      "add_products": "add_products"
    }
  },
  inputParamsSchema
}

export default tool