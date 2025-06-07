import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deregister_agent_api_agents_agent_id_delete",
  "toolDescription": "Deregister Agent",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id"
    }
  },
  inputParamsSchema
}

export default tool