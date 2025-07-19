import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpets",
  "toolDescription": "Create a pet",
  "baseUrl": "http://petstore.swagger.io/v1",
  "path": "/pets",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool