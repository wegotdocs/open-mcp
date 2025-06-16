import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "linkgithubaccess",
  "toolDescription": "",
  "baseUrl": "https://api.prod.speakeasy.com",
  "path": "/v1/github/link",
  "method": "post",
  "security": [
    {
      "key": "x-api-key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "x-workspace-identifier",
      "value": "<mcp-env-var>X_WORKSPACE_IDENTIFIER</mcp-env-var>",
      "in": "header",
      "envVarName": "X_WORKSPACE_IDENTIFIER"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "installation_id": "installation_id",
      "github_org": "github_org",
      "github_oidc_token": "github_oidc_token"
    }
  },
  inputParamsSchema
}

export default tool