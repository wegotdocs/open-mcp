import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatestatus",
  "toolDescription": "Update a status's details, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/status/{status_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "status_id": "status_id"
    }
  },
  inputParamsSchema
}

export default tool