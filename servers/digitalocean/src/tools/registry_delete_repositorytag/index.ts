import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "registry_delete_repositorytag",
  "toolDescription": "Delete Container Registry Repository Tag",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/registry/{registry_name}/repositories/{repository_name}/tags/{repository_tag}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "registry_name": "registry_name",
      "repository_name": "repository_name",
      "repository_tag": "repository_tag"
    }
  },
  inputParamsSchema
}

export default tool