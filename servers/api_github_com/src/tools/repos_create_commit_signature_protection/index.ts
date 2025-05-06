import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_commit_signature_protection",
  "toolDescription": "Create commit signature protection",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "branch": "branch"
    }
  },
  inputParamsSchema
}

export default tool