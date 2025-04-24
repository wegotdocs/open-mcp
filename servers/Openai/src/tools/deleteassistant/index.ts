import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteassistant",
  "toolDescription": "Delete an assistant.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/assistants/{assistant_id}",
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
      "assistant_id": "assistant_id"
    }
  },
  inputParamsSchema
}

export default tool