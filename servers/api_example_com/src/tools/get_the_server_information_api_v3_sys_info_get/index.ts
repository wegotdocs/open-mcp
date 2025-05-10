import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_server_information_api_v3_sys_info_get",
  "toolDescription": "Get the server information",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/sys/info",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool