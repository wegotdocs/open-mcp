import { z } from "zod";
export const toolName = `put_accounts_account_orders_customerorderid_`;
export const toolDescription = `Modify Order`;
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`;
export const path = `/accounts/{account}/orders/{CustomerOrderId}`;
export const method = `put`;
export const security = [
    {
        "key": "portal",
        "value": "<mcp-env-var>PORTAL</mcp-env-var>",
        "in": "header",
        "envVarName": "PORTAL",
        "schemeType": "apiKey",
        "schemeName": "portal"
    }
];
export const inputParams = z.object({ "body": z.object({ "Aux Price": z.number().describe("Required Price to support Stop and Stop Limit orders").optional(), "CustomerOrderId": z.string().describe("The new order ID assigned by the customer for the modification.").optional(), "GermanHftAlgo": z.boolean().describe("By setting this bool to false the customer attests that the order is not subject to German HFT Act, was not generated using any automated algorithm, and no algorithm determined or changed financial instrument, side, quantity, order type, limit or other price, trading venue or timing of this order. Currently we cannot accept orders where this flag is set to true. Such orders will be rejected.").optional(), "Mifid2Algo": z.string().describe("This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for investment decisions").optional(), "Mifid2DecisionMaker": z.string().describe("This field permits specification of the user's preregistered (via account management) MiFID II short code for decision makers.").optional(), "Mifid2ExecutionAlgo": z.string().describe("This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for handling/routing of the order.").optional(), "Mifid2ExecutionTrader": z.string().describe("This field permits specification of the user's preregistered (via account management) MiFID II person responsible for handling/routing of the order").optional(), "Order Type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).describe("Market = '1'\nLimit = '2'\nStop = '3'\nStopLimit = '4'\n").optional(), "OrigCustomerOrderId": z.string().describe("The order ID assigned by the customer").optional(), "Outside RTH": z.number().describe("Indicates if order is active outside regular trading hours, where defined. 0 = no (default), 1 = yes").optional(), "Price": z.number().describe("The order price").optional(), "Quantity": z.number().describe("The number of units in the order; contracts or shares").optional(), "Side": z.union([z.literal(1), z.literal(2)]).describe("Buy = '1', Sell = '2'").optional(), "Time in Force": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(7)]).describe("Defines order's active lifetime.\nDay = '0'\nGTC (Good till Cancel) = '1'\nIOC (Immediate or Cancel) = '3'\nOpen = '2'\nClose = '7'\n").optional() }).optional() }).shape;
