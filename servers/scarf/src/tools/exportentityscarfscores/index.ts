import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportentityscarfscores",
  "toolDescription": "Export company Scarf scores",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/companies/{owner}/scoring",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool