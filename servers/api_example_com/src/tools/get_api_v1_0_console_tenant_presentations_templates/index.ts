import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_0_console_tenant_presentations_templates",
  "toolDescription": "Requests the presentation templates",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1.0/console/{tenant}/presentations/templates",
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
      "pd_id": "pd_id",
      "from_date": "from_date",
      "to_date": "to_date",
      "page": "page",
      "size": "size"
    }
  },
  inputParamsSchema
}

export default tool