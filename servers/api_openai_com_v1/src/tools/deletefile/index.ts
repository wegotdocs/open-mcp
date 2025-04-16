import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletefile",
  "toolDescription": "Delete a file.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/files/{file_id}",
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
      "file_id": "file_id"
    }
  },
  inputParamsSchema
}

export default tool