import { z } from "zod";
export const toolName = `getcreditnotespreview`;
export const toolDescription = `Preview a credit note`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/credit_notes/preview`;
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
        "amount",
        "credit_amount",
        "effective_at",
        "email_type",
        "expand",
        "invoice",
        "lines",
        "memo",
        "metadata",
        "out_of_band_amount",
        "reason",
        "refund_amount",
        "refunds",
        "shipping_cost"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the total amount of the credit note.").optional(),
    "credit_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.").optional(),
    "effective_at": z.number().int().describe("The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.").optional(),
    "email_type": z.enum(["credit_note", "none"]).describe("Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.").optional(),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
    "invoice": z.string().max(5000).describe("ID of the invoice."),
    "lines": z.array(z.object({ "amount": z.number().int().optional(), "description": z.string().max(5000).optional(), "invoice_line_item": z.string().max(5000).optional(), "quantity": z.number().int().optional(), "tax_amounts": z.union([z.array(z.object({ "amount": z.number().int(), "tax_rate": z.string().max(5000), "taxable_amount": z.number().int() })), z.literal("")]).optional(), "tax_rates": z.union([z.array(z.string().max(5000)), z.literal("")]).optional(), "type": z.enum(["custom_line_item", "invoice_line_item"]), "unit_amount": z.number().int().optional(), "unit_amount_decimal": z.string().optional() })).describe("Line items that make up the credit note.").optional(),
    "memo": z.string().max(5000).describe("The credit note's memo appears on the credit note PDF.").optional(),
    "metadata": z.record(z.string()).describe("Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.").optional(),
    "out_of_band_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.").optional(),
    "reason": z.enum(["duplicate", "fraudulent", "order_change", "product_unsatisfactory"]).describe("Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`").optional(),
    "refund_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.").optional(),
    "refunds": z.array(z.object({ "amount_refunded": z.number().int().optional(), "refund": z.string().optional() })).describe("Refunds to link to this credit note.").optional(),
    "shipping_cost": z.object({ "shipping_rate": z.string().max(5000).optional() }).describe("When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.").optional()
};
