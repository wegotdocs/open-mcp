import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_create_agent_api_key",
  "toolDescription": "Create an Agent API Key",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents/{agent_uuid}/api_keys",
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
      "agent_uuid": "agent_uuid"
    },
    "body": {
      "agent_uuid": "b_agent_uuid",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool