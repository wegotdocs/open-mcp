import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_list_matching_refs",
  "toolDescription": "List matching references",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/matching-refs/{ref}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ref": "ref"
    }
  },
  inputParamsSchema
}

export default tool