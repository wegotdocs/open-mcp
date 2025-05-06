import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_autolink",
  "toolDescription": "Create an autolink reference for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/autolinks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "key_prefix": "key_prefix",
      "url_template": "url_template",
      "is_alphanumeric": "is_alphanumeric"
    }
  },
  inputParamsSchema
}

export default tool