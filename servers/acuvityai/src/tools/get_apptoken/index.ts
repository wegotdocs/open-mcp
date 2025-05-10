import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_apptoken",
  "toolDescription": "Retrieves the App Token with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apptokens/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool