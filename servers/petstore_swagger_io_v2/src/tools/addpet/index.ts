import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addpet",
  "toolDescription": "Add a new pet to the store",
  "baseUrl": "http://petstore.swagger.io/v2",
  "path": "/pet",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "category": "category",
      "name": "name",
      "photoUrls": "photoUrls",
      "tags": "tags",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool