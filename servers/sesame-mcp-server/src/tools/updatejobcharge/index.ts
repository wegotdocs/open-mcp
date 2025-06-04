import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatejobcharge",
  "toolDescription": "Update a job charge",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/job-charges/{jobChargeId}",
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
      "jobChargeId": "jobChargeId"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool