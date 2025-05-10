import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_pagedataview",
  "toolDescription": "Retrieves the page data view with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/pagedataviews/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool