import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_delete_openai_api_key",
  "toolDescription": "Delete OpenAI API Key",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/openai/keys/{api_key_uuid}",
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
      "api_key_uuid": "api_key_uuid"
    }
  },
  inputParamsSchema
}

export default tool