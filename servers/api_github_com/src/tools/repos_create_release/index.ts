import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_release",
  "toolDescription": "Create a release",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "tag_name": "tag_name",
      "target_commitish": "target_commitish",
      "name": "name",
      "body": "body",
      "draft": "draft",
      "prerelease": "prerelease",
      "discussion_category_name": "discussion_category_name",
      "generate_release_notes": "generate_release_notes",
      "make_latest": "make_latest"
    }
  },
  inputParamsSchema
}

export default tool