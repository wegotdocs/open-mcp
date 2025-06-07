import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reload_coda_content_api_ai_reload_coda_post",
  "toolDescription": "Reload Coda Content",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/reload-coda",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool