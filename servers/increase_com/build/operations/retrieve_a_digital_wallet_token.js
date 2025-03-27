import { z } from "zod";
export const toolName = `retrieve_a_digital_wallet_token`;
export const toolDescription = `Retrieve a Digital Wallet Token`;
export const baseUrl = `https://api.increase.com`;
export const path = `/digital_wallet_tokens/{digital_wallet_token_id}`;
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
export const inputParams = z.object({ "path": z.object({ "digital_wallet_token_id": z.string().describe("The identifier of the Digital Wallet Token.") }).optional() }).shape;
