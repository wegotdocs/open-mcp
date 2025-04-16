import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createthread",
  "toolDescription": "Create a thread.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads",
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
      "messages": "messages",
      "tool_resources": "tool_resources",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool