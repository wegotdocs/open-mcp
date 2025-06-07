import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_flux_status_api_flux_status_get",
  "toolDescription": "Get All Flux Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/flux-status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool