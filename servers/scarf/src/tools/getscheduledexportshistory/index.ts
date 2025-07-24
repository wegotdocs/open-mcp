import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getscheduledexportshistory",
  "toolDescription": "Retrieve recent scheduled exports history",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/exports/{owner}/schedule-export-history",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool