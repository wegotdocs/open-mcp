import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_start_for_org",
  "toolDescription": "Start an organization migration",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/migrations",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "repositories": "repositories",
      "lock_repositories": "lock_repositories",
      "exclude_metadata": "exclude_metadata",
      "exclude_git_data": "exclude_git_data",
      "exclude_attachments": "exclude_attachments",
      "exclude_releases": "exclude_releases",
      "exclude_owner_projects": "exclude_owner_projects",
      "org_metadata_only": "org_metadata_only",
      "exclude": "exclude"
    }
  },
  inputParamsSchema
}

export default tool