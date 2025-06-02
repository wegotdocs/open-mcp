import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "logoutuser",
  "toolDescription": "Logs out current logged in user session",
  "baseUrl": "http://petstore.swagger.io/v2",
  "path": "/user/logout",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool