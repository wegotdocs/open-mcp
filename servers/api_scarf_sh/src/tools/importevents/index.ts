import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "importevents",
  "toolDescription": "Import events in bulk",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/{owner}/import",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool