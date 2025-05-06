import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_update_issue_type",
  "toolDescription": "Update issue type for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/issue-types/{issue_type_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "issue_type_id": "issue_type_id"
    },
    "body": {
      "name": "name",
      "is_enabled": "is_enabled",
      "description": "description",
      "color": "color"
    }
  },
  inputParamsSchema
}

export default tool