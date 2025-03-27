import { z } from "zod";
export const toolName = `post_collaboration_whitelist_entries`;
export const toolDescription = `Add domain to list of allowed collaboration domains`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/collaboration_whitelist_entries`;
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
export const inputParams = z.object({ "body": z.object({ "direction": z.enum(["inbound", "outbound", "both"]).describe("The direction in which to allow collaborations."), "domain": z.string().describe("The domain to add to the list of allowed domains.") }).optional() }).shape;
