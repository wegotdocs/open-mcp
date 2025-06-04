import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletejobchargeincontract",
  "toolDescription": "Delete a job charge in contract",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/job-charges/{jobChargeId}",
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
      "jobChargeId": "jobChargeId"
    }
  },
  inputParamsSchema
}

export default tool