import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getstatus",
  "toolDescription": "Call processing status in BATCH.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/process/status/{processStatusId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "processStatusId": "processStatusId"
    }
  },
  inputParamsSchema
}

export default tool