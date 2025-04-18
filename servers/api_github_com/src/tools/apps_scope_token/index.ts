import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_scope_token",
  "toolDescription": "Create a scoped access token",
  "baseUrl": "https://api.github.com",
  "path": "/applications/{client_id}/token/scoped",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "client_id": "client_id"
    },
    "body": {
      "access_token": "access_token",
      "target": "target",
      "target_id": "target_id",
      "repositories": "repositories",
      "repository_ids": "repository_ids",
      "permissions": "permissions"
    }
  },
  inputParamsSchema
}

export default tool