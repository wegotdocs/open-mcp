import { z } from "zod";
export const toolName = `createpaymentmethod`;
export const toolDescription = `Payment Method Add`;
export const baseUrl = `https://api.linode.com/v4`;
export const path = `/account/payment-methods`;
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
export const inputParams = z.object({ "body": z.object({ "data": z.object({ "card_number": z.string().min(14).max(24).describe("Your credit card number. No spaces or dashes allowed."), "cvv": z.string().min(3).max(4).describe("CVV (Card Verification Value) of the credit card, typically found on the back of the card.\n"), "expiry_month": z.number().int().gte(1).lte(12).describe("A value from 1-12 representing the expiration month of your credit card.\n\n  * 1 = January\n  * 2 = February\n  * 3 = March\n  * Etc.\n"), "expiry_year": z.number().int().describe("A four-digit integer representing the expiration year of\nyour credit card.\n\nThe combination of `expiry_month` and `expiry_year`\nmust result in a month/year combination of the current month or in\nthe future. An expiration date set in the past is invalid.\n") }).describe("An object representing the credit card information you have on file with\nLinode to make Payments against your Account.\n"), "is_default": z.boolean().describe("Whether this Payment Method is the default method for automatically processing service charges.\n"), "type": z.literal("credit_card").describe("The type of Payment Method.\n\nAlternative Payment Methods including Google Pay and PayPal can be added using the Cloud Manager. See the [Manage Payment Methods](/docs/products/platform/billing/guides/payment-methods/) guide\nfor details and instructions.\n") }).describe("Payment Method Request Object.").optional() }).shape;
