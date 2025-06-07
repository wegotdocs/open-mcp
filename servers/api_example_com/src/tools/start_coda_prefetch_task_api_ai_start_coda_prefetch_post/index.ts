import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "start_coda_prefetch_task_api_ai_start_coda_prefetch_post",
  "toolDescription": "Start Coda Prefetch Task",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/start-coda-prefetch",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool