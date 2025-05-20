import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusersearchfilters",
  "toolDescription": "Get user's search filters",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/search_filters",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool