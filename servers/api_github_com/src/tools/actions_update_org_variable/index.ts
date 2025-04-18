import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_update_org_variable",
  "toolDescription": "Update an organization variable",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/variables/{name}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "name": "name"
    },
    "body": {
      "name": "b_name",
      "value": "value",
      "visibility": "visibility",
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool