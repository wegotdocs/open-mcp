import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addpet",
  "toolDescription": "Creates a new pet in the store. Duplicates are allowed",
  "baseUrl": "https://petstore.swagger.io/v2",
  "path": "/pets",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "tag": "tag"
    }
  },
  inputParamsSchema
}

export default tool