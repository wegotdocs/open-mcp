import { z } from "zod";
export const toolName = `createpayment`;
export const toolDescription = `Payment Make`;
export const baseUrl = `https://api.linode.com/v4`;
export const path = `/account/payments`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "cvv": z.string().describe("CVV (Card Verification Value) of the credit card to be used for the Payment. Required if paying by credit card.\n").optional(), "payment_method_id": z.number().int().describe("The ID of the Payment Method to apply to the Payment.\n").optional(), "usd": z.string().regex(new RegExp("^\\$?\\d+\\.\\d{2}$")).describe("The amount in US Dollars of the Payment.\n\n* Can begin with or without `$`.\n* Commas (`,`) are not accepted.\n* Must end with a decimal expression, such as `.00` or `.99`.\n* Minimum: `$5.00` or the Account balance, whichever is lower.\n* Maximum: `$2000.00` or the Account balance up to `$50000.00`, whichever is greater.\n") }).describe("Payment object request.").optional() }).shape;
