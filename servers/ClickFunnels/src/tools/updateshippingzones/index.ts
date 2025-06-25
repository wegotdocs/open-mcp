import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateshippingzones",
  "toolDescription": "Update Zone",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/shipping/zones/{id}",
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
      "shipping_zone": "shipping_zone"
    }
  },
  inputParamsSchema
}

export default tool