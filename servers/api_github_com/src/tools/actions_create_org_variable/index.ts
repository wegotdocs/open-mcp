import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_create_org_variable",
  "toolDescription": "Create an organization variable",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/variables",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "name": "name",
      "value": "value",
      "visibility": "visibility",
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool