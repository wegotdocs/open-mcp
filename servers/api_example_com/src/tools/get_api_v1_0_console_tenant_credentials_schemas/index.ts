import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_0_console_tenant_credentials_schemas",
  "toolDescription": "Requests the status of issuance",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1.0/console/{tenant}/credentials/schemas",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "tenant": "tenant"
    },
    "query": {
      "id": "id",
      "from_date": "from_date",
      "to_date": "to_date",
      "page": "page",
      "size": "size"
    }
  },
  inputParamsSchema
}

export default tool