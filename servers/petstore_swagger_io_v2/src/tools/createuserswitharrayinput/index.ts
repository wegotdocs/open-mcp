import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createuserswitharrayinput",
  "toolDescription": "Creates list of users with given input array",
  "baseUrl": "http://petstore.swagger.io/v2",
  "path": "/user/createWithArray",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool