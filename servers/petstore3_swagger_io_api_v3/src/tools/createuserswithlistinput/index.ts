import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createuserswithlistinput",
  "toolDescription": "Creates list of users with given input array.",
  "baseUrl": "https://petstore3.swagger.io/api/v3",
  "path": "/user/createWithList",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool