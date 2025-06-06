import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_orders_order_id_refunds_id_",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/orders/{order_id}/refunds/{id}",
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
      "order_id": "order_id",
      "id": "id"
    },
    "query": {
      "context": "context"
    }
  },
  inputParamsSchema
}

export default tool