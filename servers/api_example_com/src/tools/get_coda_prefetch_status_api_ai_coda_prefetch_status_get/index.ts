import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_coda_prefetch_status_api_ai_coda_prefetch_status_get",
  "toolDescription": "Get Coda Prefetch Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/coda-prefetch-status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool