import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_delete_ref",
  "toolDescription": "Delete a reference",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/refs/{ref}",
  "method": "delete",
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