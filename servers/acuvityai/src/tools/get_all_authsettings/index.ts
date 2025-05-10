import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_authsettings",
  "toolDescription": "Retrieve authentication settings for an organization.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/authsettings",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool