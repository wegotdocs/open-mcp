import { z } from "zod";
export const toolName = `getproductsproductfeaturesid`;
export const toolDescription = `Retrieve a product_feature`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/products/{product}/features/{id}`;
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
        "id",
        "product"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "id": z.string().max(5000).describe("The ID of the product_feature."),
    "product": z.string().max(5000).describe("The ID of the product."),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
};
