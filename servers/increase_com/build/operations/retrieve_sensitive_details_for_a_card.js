import { z } from "zod";
export const toolName = `retrieve_sensitive_details_for_a_card`;
export const toolDescription = `Retrieve sensitive details for a Card`;
export const baseUrl = `https://api.increase.com`;
export const path = `/cards/{card_id}/details`;
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
export const inputParams = z.object({ "path": z.object({ "card_id": z.string().describe("The identifier of the Card to retrieve details for.") }).optional() }).shape;
