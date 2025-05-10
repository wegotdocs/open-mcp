import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "find_pet_by_id",
  "toolDescription": "Returns a user based on a single ID, if the user does not have access to the pet",
  "baseUrl": "https://petstore.swagger.io/v2",
  "path": "/pets/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool