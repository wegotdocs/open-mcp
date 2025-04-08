import { z } from "zod";
export const toolName = `deleteauthtoken`;
export const toolDescription = `Delete an authentication token`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v3/user/tokens/{tokenId}`;
export const method = `delete`;
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
    "query": [],
    "header": [],
    "path": [
        "tokenId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "tokenId": z.string().describe("The identifier of the token to invalidate. The special value \\\"current\\\" may be supplied, which invalidates the token that the HTTP request was authenticated with.")
};
