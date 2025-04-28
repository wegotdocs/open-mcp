import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfeatures",
  "toolDescription": "Get information about what this plugin can do.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_features",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool