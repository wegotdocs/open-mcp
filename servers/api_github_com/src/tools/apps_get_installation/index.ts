import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_installation",
  "toolDescription": "Get an installation for the authenticated app",
  "baseUrl": "https://api.github.com",
  "path": "/app/installations/{installation_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "installation_id": "installation_id"
    }
  },
  inputParamsSchema
}

export default tool