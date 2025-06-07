import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_agent_api_agents_agent_id_get",
  "toolDescription": "Get Agent",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id"
    }
  },
  inputParamsSchema
}

export default tool