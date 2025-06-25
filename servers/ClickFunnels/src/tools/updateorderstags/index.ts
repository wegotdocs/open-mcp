import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateorderstags",
  "toolDescription": "Update Tag",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/orders/tags/{id}",
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
      "orders_tag": "orders_tag"
    }
  },
  inputParamsSchema
}

export default tool