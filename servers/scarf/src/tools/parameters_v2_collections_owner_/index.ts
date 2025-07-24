import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v2_collections_owner_",
  "toolDescription": "",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/collections/{owner}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool