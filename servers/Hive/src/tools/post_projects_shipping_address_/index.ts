import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_projects_shipping_address_",
  "toolDescription": "Shipping Address Create",
  "baseUrl": "http://localhost:8000",
  "path": "/projects/shipping_address/",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "noauth <mcp-env-var>NOAUTH_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "NOAUTH_CREDENTIALS"
    }
  ],
  "paramsMap": {
    "header": {
      "Accept": "Accept",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool