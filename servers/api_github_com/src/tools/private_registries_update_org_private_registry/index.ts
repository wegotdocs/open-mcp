import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "private_registries_update_org_private_registry",
  "toolDescription": "Update a private registry for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/private-registries/{secret_name}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "secret_name": "secret_name"
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