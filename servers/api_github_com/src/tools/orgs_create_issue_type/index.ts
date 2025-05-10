import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_create_issue_type",
  "toolDescription": "Create issue type for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/issue-types",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
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