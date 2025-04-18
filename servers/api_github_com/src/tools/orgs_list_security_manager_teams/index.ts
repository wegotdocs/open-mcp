import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_security_manager_teams",
  "toolDescription": "List security manager teams",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/security-managers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool