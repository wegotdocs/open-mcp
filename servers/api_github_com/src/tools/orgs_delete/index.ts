import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_delete",
  "toolDescription": "Delete an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool