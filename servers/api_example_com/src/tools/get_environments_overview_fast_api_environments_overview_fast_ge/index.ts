import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environments_overview_fast_api_environments_overview_fast_ge",
  "toolDescription": "Get Environments Overview Fast",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/overview/fast",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool