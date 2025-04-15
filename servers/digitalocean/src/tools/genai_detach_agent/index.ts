import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_detach_agent",
  "toolDescription": "Delete Agent Route for an Agent",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}",
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
      "parent_agent_uuid": "parent_agent_uuid",
      "child_agent_uuid": "child_agent_uuid"
    }
  },
  inputParamsSchema
}

export default tool