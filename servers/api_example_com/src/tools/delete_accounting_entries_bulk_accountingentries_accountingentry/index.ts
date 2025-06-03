import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_accounting_entries_bulk_accountingentries_accountingentry",
  "toolDescription": "Delete accounting entries bulk by accountingEntryCode",
  "baseUrl": "https://api.example.com",
  "path": "/accountingentries/accountingentrycode/{companyId}",
  "method": "delete",
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
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool