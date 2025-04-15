import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "registry_list_repositoriesv2",
  "toolDescription": "List All Container Registry Repositories (V2)",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/registry/{registry_name}/repositoriesV2",
  "method": "get",
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
      "registry_name": "registry_name"
    },
    "query": {
      "per_page": "per_page",
      "page": "page",
      "page_token": "page_token"
    }
  },
  inputParamsSchema
}

export default tool