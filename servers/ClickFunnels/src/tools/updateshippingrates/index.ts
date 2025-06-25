import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateshippingrates",
  "toolDescription": "Update Rate",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/shipping/rates/{id}",
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
      "shipping_rate": "shipping_rate"
    }
  },
  inputParamsSchema
}

export default tool