import { z } from "zod";
export const toolName = `get_spaces`;
export const toolDescription = `Returns spaces of my group`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "query": z.object({ "Name": z.string().describe("Name of the space").optional(), "Type": z.enum(["private", "enterprise", "company", "association"]).describe("Type of the space").optional(), "RegistrationNumber": z.string().describe("registration number of the space").optional() }).optional() }).shape;
