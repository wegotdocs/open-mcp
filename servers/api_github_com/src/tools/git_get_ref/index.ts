import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_get_ref",
  "toolDescription": "Get a reference",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/ref/{ref}",
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