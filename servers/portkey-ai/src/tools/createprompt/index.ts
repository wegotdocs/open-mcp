import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createprompt",
  "toolDescription": "Create a new prompt",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts",
  "method": "post",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "collection_id": "collection_id",
      "string": "string",
      "parameters": "parameters",
      "functions": "functions",
      "tools": "tools",
      "tool_choice": "tool_choice",
      "model": "model",
      "virtual_key": "virtual_key",
      "version_description": "version_description",
      "template_metadata": "template_metadata"
    }
  },
  inputParamsSchema
}

export default tool