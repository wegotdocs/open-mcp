import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "aborteventimport",
  "toolDescription": "Abort event import",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/imports/{owner}/{event_import_id}/abort",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool