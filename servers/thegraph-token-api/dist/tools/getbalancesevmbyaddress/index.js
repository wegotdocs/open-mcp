export { inputParams } from "./schema/root.js";
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
