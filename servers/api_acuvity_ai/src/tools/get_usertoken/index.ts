import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_usertoken",
  "toolDescription": "Retrieves the User Token with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/usertokens/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool