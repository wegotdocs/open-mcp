import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportentitycompanyevents",
  "toolDescription": "Export company events",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/companies/{owner}/{domain}/events",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool