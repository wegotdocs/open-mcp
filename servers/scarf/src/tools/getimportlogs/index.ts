import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getimportlogs",
  "toolDescription": "Retrieve the import log for an event import",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/imports/{owner}/{event_import_id}/log",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool