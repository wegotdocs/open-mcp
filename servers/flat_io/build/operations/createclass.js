import { z } from "zod";
export const toolName = `createclass`;
export const toolDescription = `Create a new class`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/classes`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "name": z.string().max(255).describe("The name of the new class"), "section": z.string().max(255).describe("The section of the new class").optional() }).describe("Creation of a classroom").optional() }).shape;
