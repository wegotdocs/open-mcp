import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_checkout",
  "toolDescription": "Create Checkout User Route",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/billing/stripe/checkouts/",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "plan": "plan",
      "success_url": "success_url"
    }
  },
  inputParamsSchema
}

export default tool