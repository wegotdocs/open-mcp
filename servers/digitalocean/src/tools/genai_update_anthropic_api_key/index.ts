import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_update_anthropic_api_key",
  "toolDescription": "Update Anthropic API Key",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/anthropic/keys/{api_key_uuid}",
  "method": "put",
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
      "api_key_uuid": "api_key_uuid"
    },
    "body": {
      "api_key": "api_key",
      "api_key_uuid": "b_api_key_uuid",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool