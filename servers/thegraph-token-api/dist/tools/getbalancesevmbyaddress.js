import { z } from "zod";
export const toolName = `getbalancesevmbyaddress`;
export const toolDescription = `Token Balances by Wallet Address`;
export const baseUrl = `https://token-api.thegraph.com`;
export const path = `/balances/evm/{address}`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "network_id",
        "contract",
        "limit",
        "page"
    ],
    "header": [],
    "path": [
        "address"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "address": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM wallet address to query"), "network_id": z.enum(["mainnet", "bsc", "base", "arbitrum-one", "optimism", "matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional(), "contract": z.string().optional(), "limit": z.number().int().gte(1).lte(1000).describe("The maximum number of items returned in a single request."), "page": z.number().int().gte(1).describe("The page number of the results to return.") }).shape;
