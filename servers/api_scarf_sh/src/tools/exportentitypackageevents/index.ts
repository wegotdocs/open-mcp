import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportentitypackageevents",
  "toolDescription": "Export all package events",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/events",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool