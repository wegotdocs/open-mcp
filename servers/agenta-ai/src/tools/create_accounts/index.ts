import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_accounts",
  "toolDescription": "Create Accounts",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/admin/accounts",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "users": "users",
      "organizations": "organizations",
      "workspaces": "workspaces",
      "projects": "projects",
      "organization_memberships": "organization_memberships",
      "workspace_memberships": "workspace_memberships",
      "project_memberships": "project_memberships"
    }
  },
  inputParamsSchema
}

export default tool