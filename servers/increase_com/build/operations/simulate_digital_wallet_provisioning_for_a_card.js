import { z } from "zod";
export const toolName = `simulate_digital_wallet_provisioning_for_a_card`;
export const toolDescription = `Simulate digital wallet provisioning for a card`;
export const baseUrl = `https://api.increase.com`;
export const path = `/simulations/digital_wallet_token_requests`;
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
export const inputParams = z.object({ "body": z.object({ "card_id": z.string().describe("The identifier of the Card to be authorized.") }).optional() }).shape;
