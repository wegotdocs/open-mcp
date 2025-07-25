import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecollection",
  "toolDescription": "Delete collection",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/collections/{owner}/{collection_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool