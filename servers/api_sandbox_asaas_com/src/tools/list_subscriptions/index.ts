import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_subscriptions",
  "toolDescription": "List subscriptions",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/subscriptions",
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
      "customer": "customer",
      "customerGroupName": "customerGroupName",
      "billingType": "billingType",
      "status": "status",
      "deletedOnly": "deletedOnly",
      "includeDeleted": "includeDeleted",
      "externalReference": "externalReference",
      "order": "order",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool