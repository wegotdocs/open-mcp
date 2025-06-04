import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcontactproducts",
  "toolDescription": "Get products by Contact ID",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/business/{ContactID}/products",
  "method": "get",
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
      "ContactID": "ContactID"
    },
    "query": {
      "count": "count",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool