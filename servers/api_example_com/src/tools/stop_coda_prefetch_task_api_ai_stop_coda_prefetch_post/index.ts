import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "stop_coda_prefetch_task_api_ai_stop_coda_prefetch_post",
  "toolDescription": "Stop Coda Prefetch Task",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/stop-coda-prefetch",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool