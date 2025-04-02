import { z } from "zod";
export const toolName = `get_plants`;
export const toolDescription = `Returns all plants from the system that the user has access to`;
export const baseUrl = `http://sandbox.mintlify.com`;
export const path = `/plants`;
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
        "limit"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "limit": z.number().int().describe("The maximum number of results to return").optional() }).shape;
