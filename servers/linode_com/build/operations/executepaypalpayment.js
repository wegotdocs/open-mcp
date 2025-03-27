import { z } from "zod";
export const toolName = `executepaypalpayment`;
export const toolDescription = `Staged/Approved PayPal Payment Execute`;
export const baseUrl = `https://api.linode.com/v4`;
export const path = `/account/payments/paypal/execute`;
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
export const inputParams = z.object({ "body": z.object({ "payer_id": z.string().describe("The PayerID returned by PayPal during the transaction authorization process.\n"), "payment_id": z.string().describe("The PaymentID returned from [POST /account/payments/paypal](/docs/api/account/#paypal-payment-stage) that has been approved with PayPal.\n") }).describe("An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.\n").optional() }).shape;
