import { z } from "zod";
export const toolName = `simulate_an_authorization_on_a_card`;
export const toolDescription = `Simulate an authorization on a Card`;
export const baseUrl = `https://api.increase.com`;
export const path = `/simulations/card_authorizations`;
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
export const inputParams = z.object({ "body": z.object({ "amount": z.number().int().gte(1).lte(1000000000).describe("The authorization amount in cents."), "card_id": z.string().describe("The identifier of the Card to be authorized.").optional(), "digital_wallet_token_id": z.string().describe("The identifier of the Digital Wallet Token to be authorized.").optional() }).optional() }).shape;
