import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "private_registries_create_org_private_registry",
  "toolDescription": "Create a private registry for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/private-registries",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "registry_type": "registry_type",
      "username": "username",
      "encrypted_value": "encrypted_value",
      "key_id": "key_id",
      "visibility": "visibility",
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool