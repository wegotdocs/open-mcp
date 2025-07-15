import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteperson",
  "toolDescription": "Delete a person",
  "baseUrl": "https://api.float.com/v3",
  "path": "/people/{people_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "people_id": "people_id"
    }
  },
  inputParamsSchema
}

export default tool