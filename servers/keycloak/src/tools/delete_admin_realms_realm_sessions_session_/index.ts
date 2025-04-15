import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_sessions_session_",
  "toolDescription": "Remove a specific user session.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/sessions/{session}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "session": "session"
    },
    "query": {
      "isOffline": "isOffline"
    }
  },
  inputParamsSchema
}

export default tool