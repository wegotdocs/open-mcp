import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_generate_release_notes",
  "toolDescription": "Generate release notes content for a release",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/generate-notes",
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
      "previous_tag_name": "previous_tag_name",
      "configuration_file_path": "configuration_file_path"
    }
  },
  inputParamsSchema
}

export default tool