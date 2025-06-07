import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_endpoints_api_endpoints_get",
  "toolDescription": "Get All Endpoints",
  "baseUrl": "https://api.example.com",
  "path": "/api/endpoints",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool