import { z } from "zod";
export const toolName = `delete_accounts_account_orders_customerorderid_`;
export const toolDescription = `Cancel Order`;
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`;
export const path = `/accounts/{account}/orders/{CustomerOrderId}`;
export const method = `delete`;
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
export const inputParams = z.object({}).shape;
