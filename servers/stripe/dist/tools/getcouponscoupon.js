import { z } from "zod";
export const toolName = `getcouponscoupon`;
export const toolDescription = `Retrieve a coupon`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/coupons/{coupon}`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
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
        "expand"
    ],
    "header": [],
    "path": [
        "coupon"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "coupon": z.string().max(5000),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
};
