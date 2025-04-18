import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_delete_issue_type",
  "toolDescription": "Delete issue type for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/issue-types/{issue_type_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "issue_type_id": "issue_type_id"
    }
  },
  inputParamsSchema
}

export default tool