import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_get_tag",
  "toolDescription": "Get a tag",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/tags/{tag_sha}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "tag_sha": "tag_sha"
    }
  },
  inputParamsSchema
}

export default tool