import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_customers_customer_id_downloads",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/customers/{customer_id}/downloads",
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
      "customer_id": "customer_id"
    },
    "query": {
      "context": "context"
    }
  },
  inputParamsSchema
}

export default tool