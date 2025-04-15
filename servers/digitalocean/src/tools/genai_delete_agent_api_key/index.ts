import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_delete_agent_api_key",
  "toolDescription": "Delete API Key for an Agent",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}",
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
      "agent_uuid": "agent_uuid",
      "api_key_uuid": "api_key_uuid"
    }
  },
  inputParamsSchema
}

export default tool