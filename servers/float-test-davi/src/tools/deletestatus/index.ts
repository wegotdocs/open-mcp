import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletestatus",
  "toolDescription": "Delete a status",
  "baseUrl": "https://api.float.com/v3",
  "path": "/status/{status_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "status_id": "status_id"
    }
  },
  inputParamsSchema
}

export default tool