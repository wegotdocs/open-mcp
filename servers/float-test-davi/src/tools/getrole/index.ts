import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrole",
  "toolDescription": "Retrieve a single role",
  "baseUrl": "https://api.float.com/v3",
  "path": "/roles/{role_id}",
  "method": "get",
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