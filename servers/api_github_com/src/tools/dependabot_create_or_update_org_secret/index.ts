import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependabot_create_or_update_org_secret",
  "toolDescription": "Create or update an organization secret",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/dependabot/secrets/{secret_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "secret_name": "secret_name"
    },
    "body": {
      "encrypted_value": "encrypted_value",
      "key_id": "key_id",
      "visibility": "visibility",
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool