import { z } from "zod";
export const toolName = `simulate_settling_a_card_authorization`;
export const toolDescription = `Simulate settling a card authorization`;
export const baseUrl = `https://api.increase.com`;
export const path = `/simulations/card_settlements`;
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
export const inputParams = z.object({ "body": z.object({ "amount": z.number().int().gte(1).describe("The amount to be settled. This defaults to the amount of the Pending Transaction being settled.").optional(), "card_id": z.string().describe("The identifier of the Card to create a settlement on."), "pending_transaction_id": z.string().describe("The identifier of the Pending Transaction for the Card Authorization you wish to settle.") }).optional() }).shape;
