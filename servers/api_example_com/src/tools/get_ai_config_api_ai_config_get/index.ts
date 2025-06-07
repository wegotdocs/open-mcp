import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ai_config_api_ai_config_get",
  "toolDescription": "Get Ai Config",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/config",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool