import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "optimize_ai_cache_api_ai_optimize_cache_post",
  "toolDescription": "Optimize Ai Cache",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/optimize-cache",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool