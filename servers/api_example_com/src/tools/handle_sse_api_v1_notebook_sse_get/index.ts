import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "handle_sse_api_v1_notebook_sse_get",
  "toolDescription": "Handle Sse",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/notebook/sse",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool