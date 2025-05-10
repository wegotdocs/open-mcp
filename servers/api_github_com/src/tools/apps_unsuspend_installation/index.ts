import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_unsuspend_installation",
  "toolDescription": "Unsuspend an app installation",
  "baseUrl": "https://api.github.com",
  "path": "/app/installations/{installation_id}/suspended",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "installation_id": "installation_id"
    }
  },
  inputParamsSchema
}

export default tool