import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "healthcontrollercheckhealthstatus",
  "toolDescription": "Health check",
  "baseUrl": "https://api.example.com",
  "path": "/api/healthz",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool