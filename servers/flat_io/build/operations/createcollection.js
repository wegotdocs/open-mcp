import { z } from "zod";
export const toolName = `createcollection`;
export const toolDescription = `Create a new collection`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/collections`;
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
export const inputParams = z.object({ "body": z.object({ "privacy": z.literal("private").describe("The collection main privacy mode.\n- `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.\n"), "title": z.string().min(1).max(300).describe("The title of the collection") }).optional() }).shape;
