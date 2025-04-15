import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_update",
  "toolDescription": "Update an App",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/{id}",
  "method": "put",
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
      "id": "id"
    },
    "body": {
      "spec": "spec",
      "update_all_source_versions": "update_all_source_versions"
    }
  },
  inputParamsSchema
}

export default tool