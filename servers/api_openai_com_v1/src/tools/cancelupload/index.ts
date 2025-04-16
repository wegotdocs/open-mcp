import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cancelupload",
  "toolDescription": "Cancels the Upload. No Parts may be added after an Upload is cancelled.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/uploads/{upload_id}/cancel",
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
    "path": {
      "upload_id": "upload_id"
    }
  },
  inputParamsSchema
}

export default tool