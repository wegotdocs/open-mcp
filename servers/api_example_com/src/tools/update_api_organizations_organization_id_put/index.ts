import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_api_organizations_organization_id_put",
  "toolDescription": "Update",
  "baseUrl": "https://api.example.com",
  "path": "/api/organizations/{organization_id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "organization_id": "organization_id"
    },
    "body": {
      "name": "name",
      "parent_id": "parent_id"
    }
  },
  inputParamsSchema
}

export default tool