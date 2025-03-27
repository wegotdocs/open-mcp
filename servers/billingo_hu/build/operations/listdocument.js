import { z } from "zod";
export const toolName = `listdocument`;
export const toolDescription = `List all documents`;
export const baseUrl = `https://api.billingo.hu/v3`;
export const path = `/documents`;
export const method = `get`;
export const security = [
    {
        "key": "X-API-KEY",
        "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-API-KEY"
    }
];
export const inputParams = z.object({ "query": z.object({ "page": z.number().int(), "per_page": z.number().int().gte(1).lte(100), "block_id": z.number().int().describe("Filter documents by the identifier of your DocumentBlock.").optional(), "partner_id": z.number().int().describe("Filter documents by the identifier of your Partner.").optional(), "payment_method": z.enum(["aruhitel", "bankcard", "barion", "barter", "cash", "cash_on_delivery", "coupon", "elore_utalas", "ep_kartya", "kompenzacio", "levonas", "online_bankcard", "payoneer", "paypal", "paypal_utolag", "payu", "pick_pack_pont", "postai_csekk", "postautalvany", "skrill", "szep_card", "transferwise", "upwork", "utalvany", "valto", "wire_transfer"]).describe("Filter documents by PaymentMethod value.").optional(), "payment_status": z.enum(["expired", "none", "outstanding", "paid", "partially_paid"]).describe("Filter documents by PaymentStatus value.").optional(), "start_date": z.string().date().describe("Filter documents by date.").optional(), "end_date": z.string().date().describe("Filter documents by date.").optional(), "start_number": z.number().int().describe("Starting number of the document, should not contain year or any other formatting. Required if `start_year` given").optional(), "end_number": z.number().int().describe("Ending number of the document, should not contain year or any other formatting. Required if `end_year` given").optional(), "start_year": z.number().int().describe("Year for `start_number` parameter. Required if `start_number` given.").optional(), "end_year": z.number().int().describe("Year for `end_number` parameter. Required if `end_number` given.").optional() }).optional() }).shape;
