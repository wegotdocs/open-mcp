import { z } from "zod";
export const toolName = `simulates_advancing_the_state_of_a_card_dispute`;
export const toolDescription = `Simulates advancing the state of a card dispute`;
export const baseUrl = `https://api.increase.com`;
export const path = `/simulations/card_disputes/{card_dispute_id}/action`;
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
export const inputParams = z.object({ "path": z.object({ "card_dispute_id": z.string().describe("The dispute you would like to action.") }).optional(), "body": z.object({ "explanation": z.string().min(1).max(200).describe("Why the dispute was rejected. Not required for accepting disputes.").optional(), "status": z.enum(["accepted", "rejected"]).describe("The status to move the dispute to.") }).optional() }).shape;
