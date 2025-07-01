import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "simulate_anticipation",
  "toolDescription": "Simulate anticipation",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/anticipations/simulate",
  "method": "post",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "installment": "installment",
      "payment": "payment"
    }
  },
  inputParamsSchema
}

export default tool