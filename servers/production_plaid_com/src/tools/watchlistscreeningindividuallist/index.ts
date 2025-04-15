import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "watchlistscreeningindividuallist",
  "toolDescription": "List Individual Watchlist Screenings",
  "baseUrl": "https://production.plaid.com",
  "path": "/watchlist_screening/individual/list",
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
      "secret": "secret",
      "client_id": "client_id",
      "watchlist_program_id": "watchlist_program_id",
      "client_user_id": "client_user_id",
      "status": "status",
      "assignee": "assignee",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool