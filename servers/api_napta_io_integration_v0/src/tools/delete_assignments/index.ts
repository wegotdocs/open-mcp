import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_assignments",
  "toolDescription": "Delete an assignment",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/assignments",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "id.napta_id": "id.napta_id",
      "id.external_id": "id.external_id"
    }
  },
  inputParamsSchema
}

export default tool