import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecontract",
  "toolDescription": "Delete a contract",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/contracts/{contractId}",
  "method": "delete",
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
      "contractId": "contractId"
    }
  },
  inputParamsSchema
}

export default tool