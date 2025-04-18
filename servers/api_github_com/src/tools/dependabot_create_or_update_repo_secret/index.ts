import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependabot_create_or_update_repo_secret",
  "toolDescription": "Create or update a repository secret",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "secret_name": "secret_name"
    },
    "body": {
      "encrypted_value": "encrypted_value",
      "key_id": "key_id"
    }
  },
  inputParamsSchema
}

export default tool