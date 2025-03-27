import { z } from "zod";
export const toolName = `get_collaboration_whitelist_entries_id`;
export const toolDescription = `Get allowed collaboration domain`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/collaboration_whitelist_entries/{collaboration_whitelist_entry_id}`;
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
export const inputParams = z.object({ "path": z.object({ "collaboration_whitelist_entry_id": z.string().describe("The ID of the entry in the list.") }).optional() }).shape;
