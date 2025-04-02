import { z } from "zod";
export const toolName = `submit_invoice`;
export const toolDescription = `Submit Invoice`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/billing/invoices`;
export const method = `post`;
export const security = [
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
    "query": [],
    "header": [],
    "path": [
        "integrationConfigurationId"
    ],
    "cookie": [],
    "body": [
        "externalId",
        "invoiceDate",
        "memo",
        "period",
        "items",
        "discounts",
        "test"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "integrationConfigurationId": z.string(), "externalId": z.string().optional(), "invoiceDate": z.string().datetime({ offset: true }).describe("Invoice date. Must be within the period's start and end."), "memo": z.string().describe("Additional memo for the invoice.").optional(), "period": z.object({ "start": z.string().datetime({ offset: true }), "end": z.string().datetime({ offset: true }) }).strict().describe("Subscription period for this billing cycle."), "items": z.array(z.object({ "resourceId": z.string().describe("Partner's resource ID.").optional(), "billingPlanId": z.string().describe("Partner's billing plan ID."), "start": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "end": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "name": z.string(), "details": z.string().optional(), "price": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Currency amount as a decimal string."), "quantity": z.number(), "units": z.string(), "total": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Currency amount as a decimal string.") }).strict()), "discounts": z.array(z.object({ "resourceId": z.string().describe("Partner's resource ID.").optional(), "billingPlanId": z.string().describe("Partner's billing plan ID."), "start": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "end": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "name": z.string(), "details": z.string().optional(), "amount": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Currency amount as a decimal string.") }).strict()).optional(), "test": z.object({ "validate": z.boolean().optional(), "result": z.enum(["paid", "notpaid"]).optional() }).strict().describe("Test mode").optional() }).shape;
