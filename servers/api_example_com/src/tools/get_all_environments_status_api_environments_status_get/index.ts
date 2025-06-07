import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_environments_status_api_environments_status_get",
  "toolDescription": "Get All Environments Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool