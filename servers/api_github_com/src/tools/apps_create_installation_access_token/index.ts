import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_create_installation_access_token",
  "toolDescription": "Create an installation access token for an app",
  "baseUrl": "https://api.github.com",
  "path": "/app/installations/{installation_id}/access_tokens",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "installation_id": "installation_id"
    },
    "body": {
      "repositories": "repositories",
      "repository_ids": "repository_ids",
      "permissions": "permissions"
    }
  },
  inputParamsSchema
}

export default tool