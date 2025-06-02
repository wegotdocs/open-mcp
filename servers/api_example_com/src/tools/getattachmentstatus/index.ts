import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getattachmentstatus",
  "toolDescription": "Get the processing status for an uploaded attachment.",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/v1/attachments/{attachment_id}/status",
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
      "attachment_id": "attachment_id"
    }
  },
  inputParamsSchema
}

export default tool