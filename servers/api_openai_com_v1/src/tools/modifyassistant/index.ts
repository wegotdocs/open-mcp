import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "modifyassistant",
  "toolDescription": "Modifies an assistant.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/assistants/{assistant_id}",
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
      "assistant_id": "assistant_id"
    },
    "body": {
      "model": "model",
      "reasoning_effort": "reasoning_effort",
      "name": "name",
      "description": "description",
      "instructions": "instructions",
      "tools": "tools",
      "tool_resources": "tool_resources",
      "metadata": "metadata",
      "temperature": "temperature",
      "top_p": "top_p",
      "response_format": "response_format"
    }
  },
  inputParamsSchema
}

export default tool