import { z } from "zod";
export const toolName = `getproductinfo`;
export const toolDescription = `Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).`;
export const baseUrl = `https://go-upc.com/api/v1`;
export const path = `/code/{code}`;
export const method = `get`;
export const security = [
    {
        "key": "key",
        "value": "<mcp-env-var>KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "KEY",
        "schemeType": "apiKey",
        "schemeName": "key"
    }
];
export const inputParams = z.object({ "path": z.object({ "code": z.string() }).optional() }).shape;
