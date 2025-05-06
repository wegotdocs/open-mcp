import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_release",
  "toolDescription": "Update a release",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/{release_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "release_id": "release_id"
    },
    "body": {
      "tag_name": "tag_name",
      "target_commitish": "target_commitish",
      "name": "name",
      "body": "body",
      "draft": "draft",
      "prerelease": "prerelease",
      "make_latest": "make_latest",
      "discussion_category_name": "discussion_category_name"
    }
  },
  inputParamsSchema
}

export default tool