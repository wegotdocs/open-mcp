import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "geteventimport",
  "toolDescription": "Retrieve a specific event import",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/imports/{owner}/{event_import_id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool