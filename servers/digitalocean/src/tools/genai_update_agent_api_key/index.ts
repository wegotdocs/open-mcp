import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_update_agent_api_key",
  "toolDescription": "Update API Key for an Agent",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}",
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
      "agent_uuid": "agent_uuid",
      "api_key_uuid": "api_key_uuid"
    },
    "body": {
      "agent_uuid": "b_agent_uuid",
      "api_key_uuid": "b_api_key_uuid",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool