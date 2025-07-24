import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getscheduledexports",
  "toolDescription": "Retrieve currently scheduled daily exports",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/exports/{owner}/schedule-export",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool