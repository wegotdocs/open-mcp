import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcollection",
  "toolDescription": "Get collection",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/collections/{owner}/{collection_id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool