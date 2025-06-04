import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createjobcharge",
  "toolDescription": "Create a job charge",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/job-charges",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool