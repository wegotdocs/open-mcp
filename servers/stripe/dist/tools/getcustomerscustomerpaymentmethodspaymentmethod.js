import { z } from "zod";
export const toolName = `getcustomerscustomerpaymentmethodspaymentmethod`;
export const toolDescription = `Retrieve a Customer's PaymentMethod`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/customers/{customer}/payment_methods/{payment_method}`;
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
        "customer",
        "payment_method"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "customer": z.string().max(5000), "payment_method": z.string().max(5000), "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional() }).shape;
