import { z } from "zod";
export const toolName = `get_aliases_v2`;
export const toolDescription = `Gets all aliases`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/aliases/v2`;
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
export const inputParams = z.object({ "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "count": z.number().int().gte(1).lte(100).describe("The number of items to return per page."), "after": z.number().gte(0).describe("Milliseconds elapsed since 1 January 1970 00:00:00 UTC.\nThe accepted range is from 0 to the current time.\n").optional(), "projectId": z.string().min(1).max(50).describe("Project ID.\nAny HERE Tracking user must be a member of a Tracking project.\nThe project ID can be implicitly resolved if the user calling the API is a member of a single project.\nIf the user is a member of multiple projects, the `projectId` query parameter needs to be specified explicitly.\n").optional() }).optional() }).shape;
