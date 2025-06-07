import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_vanta_resources_api_vanta_resources_get",
  "toolDescription": "Get Vanta Resources",
  "baseUrl": "https://api.example.com",
  "path": "/api/vanta/resources",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool