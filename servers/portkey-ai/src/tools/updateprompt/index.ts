import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateprompt",
  "toolDescription": "Update a prompt",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts/{promptId}",
  "method": "put",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "promptId": "promptId"
    },
    "body": {
      "name": "name",
      "collection_id": "collection_id",
      "string": "string",
      "parameters": "parameters",
      "model": "model",
      "virtual_key": "virtual_key",
      "version_description": "version_description",
      "functions": "functions",
      "tools": "tools",
      "tool_choice": "tool_choice",
      "is_raw_template": "is_raw_template",
      "prompt_metadata": "prompt_metadata"
    }
  },
  inputParamsSchema
}

export default tool