import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getforecast",
  "toolDescription": "Previsão de Transação",
  "baseUrl": "http://localhost:3030",
  "path": "/forecast/{payment_id}",
  "method": "get",
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
      "payment_id": "payment_id"
    }
  },
  inputParamsSchema
}

export default tool