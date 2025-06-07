import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "clear_kubectl_tasks_api_agents_tasks_kubectl_delete",
  "toolDescription": "Clear Kubectl Tasks",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/tasks/kubectl",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool