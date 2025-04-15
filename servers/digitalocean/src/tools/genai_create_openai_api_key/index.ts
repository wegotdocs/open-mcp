import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_create_openai_api_key",
  "toolDescription": "Create OpenAI API Key",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/openai/keys",
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
      "api_key": "api_key",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool