import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_client_info_api_client_info_get",
  "toolDescription": "Get Client Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/client-info",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool