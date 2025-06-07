import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_environments_health_api_environments_health_summary_get",
  "toolDescription": "Get All Environments Health",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/health/summary",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool