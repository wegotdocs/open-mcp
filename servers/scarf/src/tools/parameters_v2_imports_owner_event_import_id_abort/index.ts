import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v2_imports_owner_event_import_id_abort",
  "toolDescription": "",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/imports/{owner}/{event_import_id}/abort",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool