import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_org_variable",
  "toolDescription": "Get an organization variable",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/variables/{name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool