import { z } from "zod";
export const toolName = `parameters_accounts_account_trades`;
export const toolDescription = ``;
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`;
export const path = `/accounts/{account}/trades`;
export const method = `parameters`;
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
