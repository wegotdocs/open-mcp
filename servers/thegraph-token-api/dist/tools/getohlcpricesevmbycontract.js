import { z } from "zod";
export const toolName = `getohlcpricesevmbycontract`;
export const toolDescription = `Token OHLCV prices by Contract Address`;
export const baseUrl = `https://token-api.thegraph.com`;
export const path = `/ohlc/prices/evm/{contract}`;
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
        "interval",
        "startTime",
        "endTime",
        "limit",
        "page"
    ],
    "header": [],
    "path": [
        "contract"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM contract address to query"),
    "network_id": z.enum(["mainnet", "bsc", "base", "arbitrum-one", "optimism", "matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional(),
    "interval": z.enum(["1h", "4h", "1d", "1w"]).describe("The interval for which to aggregate price data (hourly, 4-hours, daily or weekly).").optional(),
    "startTime": z.number().gte(0).describe("UNIX timestamp in seconds.").optional(),
    "endTime": z.number().gte(0).describe("UNIX timestamp in seconds.").optional(),
    "limit": z.number().int().gte(1).lte(1000).describe("The maximum number of items returned in a single request.").optional(),
    "page": z.number().int().gte(1).describe("The page number of the results to return.").optional()
};
