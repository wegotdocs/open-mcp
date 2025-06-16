import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getblob",
  "toolDescription": "Get blob for a particular digest",
  "baseUrl": "https://api.prod.speakeasy.com",
  "path": "/v1/oci/v2/{organization_slug}/{workspace_slug}/{namespace_name}/blobs/{digest}",
  "method": "get",
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
    "path": {
      "organization_slug": "organization_slug",
      "workspace_slug": "workspace_slug",
      "namespace_name": "namespace_name",
      "digest": "digest"
    }
  },
  inputParamsSchema
}

export default tool