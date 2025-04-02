import { z } from "zod";
export const toolName = `getforwardingrequests`;
export const toolDescription = `List all ForwardingRequests`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/forwarding/requests`;
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
        "created",
        "ending_before",
        "expand",
        "limit",
        "starting_after"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "created": z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }).describe("Similar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.").optional(), "ending_before": z.string().max(5000).describe("A pagination cursor to fetch the previous page of the list. The value must be a ForwardingRequest ID.").optional(), "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(), "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(), "starting_after": z.string().max(5000).describe("A pagination cursor to fetch the next page of the list. The value must be a ForwardingRequest ID.").optional() }).shape;
