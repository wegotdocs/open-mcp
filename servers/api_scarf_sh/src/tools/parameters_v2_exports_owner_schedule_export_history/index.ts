import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v2_exports_owner_schedule_export_history",
  "toolDescription": "",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/exports/{owner}/schedule-export-history",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool