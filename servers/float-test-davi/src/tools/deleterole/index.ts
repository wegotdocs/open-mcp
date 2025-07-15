import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleterole",
  "toolDescription": "Delete a role",
  "baseUrl": "https://api.float.com/v3",
  "path": "/roles/{role_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "role_id": "role_id"
    }
  },
  inputParamsSchema
}

export default tool