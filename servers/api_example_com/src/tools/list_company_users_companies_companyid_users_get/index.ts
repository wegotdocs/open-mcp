import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_company_users_companies_companyid_users_get",
  "toolDescription": "List company users",
  "baseUrl": "https://api.example.com",
  "path": "/companies/{companyId}/users",
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
      "companyId": "companyId"
    }
  },
  inputParamsSchema
}

export default tool