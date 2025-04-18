import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_update_ref",
  "toolDescription": "Update a reference",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/refs/{ref}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ref": "ref"
    },
    "body": {
      "sha": "sha",
      "force": "force"
    }
  },
  inputParamsSchema
}

export default tool