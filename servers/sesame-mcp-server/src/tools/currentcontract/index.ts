import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "currentcontract",
  "toolDescription": "Get current contract by employeeId",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/contracts/{employeeId}/current-contract",
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
      "employeeId": "employeeId"
    }
  },
  inputParamsSchema
}

export default tool