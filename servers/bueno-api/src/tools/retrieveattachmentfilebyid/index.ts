import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveattachmentfilebyid",
  "toolDescription": "Retrieve Attachment File by ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/attachments/{attachmentId}/file",
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
      "attachmentId": "attachmentId"
    }
  },
  inputParamsSchema
}

export default tool