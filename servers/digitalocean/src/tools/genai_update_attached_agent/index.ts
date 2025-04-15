import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_update_attached_agent",
  "toolDescription": "Update Agent Route for an Agent",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}",
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
      "parent_agent_uuid": "parent_agent_uuid",
      "child_agent_uuid": "child_agent_uuid"
    },
    "body": {
      "child_agent_uuid": "b_child_agent_uuid",
      "if_case": "if_case",
      "parent_agent_uuid": "b_parent_agent_uuid",
      "route_name": "route_name",
      "uuid": "uuid"
    }
  },
  inputParamsSchema
}

export default tool