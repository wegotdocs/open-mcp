import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "watchlistscreeningindividualupdate",
  "toolDescription": "Update individual watchlist screening",
  "baseUrl": "https://production.plaid.com",
  "path": "/watchlist_screening/individual/update",
  "method": "post",
  "security": [
    {
      "key": "PLAID-CLIENT-ID",
      "value": "<mcp-env-var>PLAID_CLIENT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_CLIENT_ID"
    },
    {
      "key": "PLAID-SECRET",
      "value": "<mcp-env-var>PLAID_SECRET</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_SECRET"
    },
    {
      "key": "Plaid-Version",
      "value": "<mcp-env-var>PLAID_VERSION</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_VERSION"
    }
  ],
  "paramsMap": {
    "body": {
      "watchlist_screening_id": "watchlist_screening_id",
      "search_terms": "search_terms",
      "assignee": "assignee",
      "status": "status",
      "client_user_id": "client_user_id",
      "client_id": "client_id",
      "secret": "secret",
      "reset_fields": "reset_fields"
    }
  },
  inputParamsSchema
}

export default tool