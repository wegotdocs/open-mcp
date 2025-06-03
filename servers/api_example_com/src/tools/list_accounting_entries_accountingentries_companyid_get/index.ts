import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_accounting_entries_accountingentries_companyid_get",
  "toolDescription": "List accounting entries",
  "baseUrl": "https://api.example.com",
  "path": "/accountingentries/{companyId}",
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
    },
    "query": {
      "reconciled": "reconciled",
      "accountingCode": "accountingCode",
      "startDate": "startDate",
      "endDate": "endDate",
      "startUpdatedAt": "startUpdatedAt",
      "endUpdatedAt": "endUpdatedAt",
      "limit": "limit",
      "nextPageToken": "nextPageToken"
    }
  },
  inputParamsSchema
}

export default tool