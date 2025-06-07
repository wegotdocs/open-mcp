import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "register_agent_api_agents_register_post",
  "toolDescription": "Register Agent",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/register",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "namespace": "namespace",
      "cluster": "cluster",
      "version": "version",
      "capabilities": "capabilities",
      "metadata": "metadata",
      "pod_name": "pod_name",
      "node_name": "node_name"
    }
  },
  inputParamsSchema
}

export default tool