import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updaterole",
  "toolDescription": "Update a role, read-only fields are ignored.",
  "baseUrl": "https://api.float.com/v3",
  "path": "/roles/{role_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "role_id": "role_id"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool