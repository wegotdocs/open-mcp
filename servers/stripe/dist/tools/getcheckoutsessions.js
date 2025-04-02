import { z } from "zod";
export const toolName = `getcheckoutsessions`;
export const toolDescription = `List all Checkout Sessions`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/checkout/sessions`;
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
        "customer",
        "customer_details",
        "ending_before",
        "expand",
        "limit",
        "payment_intent",
        "payment_link",
        "starting_after",
        "status",
        "subscription"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return Checkout Sessions that were created during the given date interval.").optional(), "customer": z.string().max(5000).describe("Only return the Checkout Sessions for the Customer specified.").optional(), "customer_details": z.object({ "email": z.string() }).describe("Only return the Checkout Sessions for the Customer details specified.").optional(), "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(), "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(), "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(), "payment_intent": z.string().max(5000).describe("Only return the Checkout Session for the PaymentIntent specified.").optional(), "payment_link": z.string().max(5000).describe("Only return the Checkout Sessions for the Payment Link specified.").optional(), "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(), "status": z.enum(["complete", "expired", "open"]).describe("Only return the Checkout Sessions matching the given status.").optional(), "subscription": z.string().max(5000).describe("Only return the Checkout Session for the subscription specified.").optional() }).shape;
