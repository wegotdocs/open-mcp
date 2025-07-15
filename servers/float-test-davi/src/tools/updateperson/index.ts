import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateperson",
  "toolDescription": "Update a person's details, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/people/{people_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "people_id": "people_id"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool