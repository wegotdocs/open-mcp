import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ai_performance_metrics_api_ai_performance_metrics_get",
  "toolDescription": "Get Ai Performance Metrics",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/performance-metrics",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool