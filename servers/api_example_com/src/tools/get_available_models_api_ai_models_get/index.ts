import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_available_models_api_ai_models_get",
  "toolDescription": "Get Available Models",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/models",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool