import { z } from "zod";
export const toolName = `create_a_card_dispute`;
export const toolDescription = `Create a Card Dispute`;
export const baseUrl = `https://api.increase.com`;
export const path = `/card_disputes`;
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
export const inputParams = z.object({ "body": z.object({ "disputed_transaction_id": z.string().describe("The Transaction you wish to dispute. This Transaction must have a `source_type` of `card_settlement`."), "explanation": z.string().min(1).max(200).describe("Why you are disputing this Transaction.") }).optional() }).shape;
