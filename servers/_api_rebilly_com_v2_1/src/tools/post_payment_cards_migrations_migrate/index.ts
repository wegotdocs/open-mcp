import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_payment_cards_migrations_migrate",
  "toolDescription": "Migrate payment cards to another gateway account",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/payment-cards-migrations/migrate",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "fromGatewayAccountId": "fromGatewayAccountId",
      "toGatewayAccountId": "toGatewayAccountId",
      "paymentCardIds": "paymentCardIds"
    }
  },
  inputParamsSchema
}

export default tool