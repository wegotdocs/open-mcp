import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserinformation",
  "toolDescription": "Get user",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/users/{username}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool