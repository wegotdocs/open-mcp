import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createassistant",
  "toolDescription": "Create an assistant with a model and instructions.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/assistants",
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
      "model": "model",
      "name": "name",
      "description": "description",
      "instructions": "instructions",
      "reasoning_effort": "reasoning_effort",
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