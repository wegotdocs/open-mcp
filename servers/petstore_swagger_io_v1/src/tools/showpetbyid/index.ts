import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "showpetbyid",
  "toolDescription": "Info for a specific pet",
  "baseUrl": "http://petstore.swagger.io/v1",
  "path": "/pets/{petId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "petId": "petId"
    }
  },
  inputParamsSchema
}

export default tool