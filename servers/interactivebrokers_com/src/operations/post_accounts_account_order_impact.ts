import { z } from "zod"

export const toolName = `post_accounts_account_order_impact`
export const toolDescription = `Return margin impact info`
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`
export const path = `/accounts/{account}/order_impact`
export const method = `post`
export const security = [
  {
    "key": "portal",
    "value": "<mcp-env-var>PORTAL</mcp-env-var>",
    "in": "header",
    "envVarName": "PORTAL",
    "schemeType": "apiKey",
    "schemeName": "portal"
  }
]

export const inputParams = z.object({ "body": z.object({ "Aux Price": z.number().describe("Required price to support Stop and Stop Limit orders").optional(), "ContractId": z.number().describe("The internal IB identifier for the trading product specified as an integer (can be obtained in response to /secdef request)").optional(), "Currency": z.string().describe("The currency in which the FX pair trades (only for InstrumentType=CASH)").optional(), "CustomerOrderId": z.string().describe("The order ID assigned by the customer.").optional(), "InstrumentType": z.string().describe("The instrument type of the contract").optional(), "ListingExchange": z.string().describe("The exchange on which the trading product is listed (only for InstrumentType=STK)").optional(), "Order Type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).describe("Market = '1'\nLimit = '2'\nStop = '3'\nStopLimit = '4'\n").optional(), "Price": z.number().describe("The order price").optional(), "Quantity": z.number().describe("The number of units in the order; contracts or shares").optional(), "Side": z.union([z.literal(1), z.literal(2)]).describe("Buy = '1', Sell = '2'").optional(), "Ticker": z.string().describe("The symbol that identifies the trading product").optional(), "Time in Force": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(7)]).describe("Defines order's active lifetime.\nDay = '0'\nGTC (Good till Cancel) = '1'\nIOC (Immediate or Cancel) = '3'\nOpen = '2'\nClose = '7'\n").optional() }).optional() }).shape