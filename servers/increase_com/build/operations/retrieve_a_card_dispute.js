import { z } from "zod";
export const toolName = `retrieve_a_card_dispute`;
export const toolDescription = `Retrieve a Card Dispute`;
export const baseUrl = `https://api.increase.com`;
export const path = `/card_disputes/{card_dispute_id}`;
export const method = `get`;
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
export const inputParams = z.object({ "path": z.object({ "card_dispute_id": z.string().describe("The identifier of the Card Dispute.") }).optional() }).shape;
