import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upsert_prompts_post",
  "toolDescription": "Upsert Prompt",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/prompts",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "path": "path",
      "id": "id",
      "model": "model",
      "endpoint": "endpoint",
      "template": "template",
      "template_language": "template_language",
      "provider": "provider",
      "max_tokens": "max_tokens",
      "temperature": "temperature",
      "top_p": "top_p",
      "stop": "stop",
      "presence_penalty": "presence_penalty",
      "frequency_penalty": "frequency_penalty",
      "other": "other",
      "seed": "seed",
      "response_format": "response_format",
      "reasoning_effort": "reasoning_effort",
      "tools": "tools",
      "linked_tools": "linked_tools",
      "attributes": "attributes",
      "version_name": "version_name",
      "version_description": "version_description",
      "description": "description",
      "tags": "tags",
      "readme": "readme"
    }
  },
  inputParamsSchema
}

export default tool