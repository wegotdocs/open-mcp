import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "execute_agent_task_api_agent_task_post",
  "toolDescription": "Execute Agent Task",
  "baseUrl": "https://api.example.com",
  "path": "/api/agent/task",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool