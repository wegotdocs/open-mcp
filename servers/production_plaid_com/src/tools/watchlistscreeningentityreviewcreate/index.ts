import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "watchlistscreeningentityreviewcreate",
  "toolDescription": "Create a review for an entity watchlist screening",
  "baseUrl": "https://production.plaid.com",
  "path": "/watchlist_screening/entity/review/create",
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
      "confirmed_hits": "confirmed_hits",
      "dismissed_hits": "dismissed_hits",
      "comment": "comment",
      "client_id": "client_id",
      "secret": "secret",
      "entity_watchlist_screening_id": "entity_watchlist_screening_id"
    }
  },
  inputParamsSchema
}

export default tool