import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ready_ready_get",
  "toolDescription": "Check if this service is ready to receive requests",
  "baseUrl": "https://api.openepi.io/soil",
  "path": "/ready",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool