import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_create_ref",
  "toolDescription": "Create a reference",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/refs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "ref": "ref",
      "sha": "sha"
    }
  },
  inputParamsSchema
}

export default tool