import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_a_location_api_v3_org_location_org_id_delete",
  "toolDescription": "[administrator] Delete a location (TODO: 未完整實作, 僅標記已刪除)。",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/location/{org_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool