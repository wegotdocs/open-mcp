import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "registry_delete_repositorymanifest",
  "toolDescription": "Delete Container Registry Repository Manifest",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/registry/{registry_name}/repositories/{repository_name}/digests/{manifest_digest}",
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
      "manifest_digest": "manifest_digest"
    }
  },
  inputParamsSchema
}

export default tool