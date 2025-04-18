import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_create_or_update_environment_secret",
  "toolDescription": "Create or update an environment secret",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "environment_name": "environment_name",
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