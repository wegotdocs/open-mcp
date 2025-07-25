import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportpackageevents",
  "toolDescription": "Export package events",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}/events",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool