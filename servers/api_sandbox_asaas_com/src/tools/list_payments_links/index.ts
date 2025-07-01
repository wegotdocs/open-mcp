import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_payments_links",
  "toolDescription": "List payments links",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/paymentLinks",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "offset": "offset",
      "limit": "limit",
      "active": "active",
      "includeDeleted": "includeDeleted",
      "name": "name",
      "externalReference": "externalReference"
    }
  },
  inputParamsSchema
}

export default tool