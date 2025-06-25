import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateshippingratesnames",
  "toolDescription": "Update Name",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/shipping/rates/names/{id}",
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
      "shipping_rates_name": "shipping_rates_name"
    }
  },
  inputParamsSchema
}

export default tool