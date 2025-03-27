import { z } from "zod"

export const toolName = `simulate_a_refund_on_a_card`
export const toolDescription = `Simulate a refund on a card`
export const baseUrl = `https://api.increase.com`
export const path = `/simulations/card_refunds`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "body": z.object({ "transaction_id": z.string().describe("The identifier for the Transaction to refund. The Transaction's source must have a category of card_settlement.") }).optional() }).shape