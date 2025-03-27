import { z } from "zod";
export const toolName = `app_getapplicationapiusage`;
export const toolDescription = `Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/App/ApiUsage/{applicationId}/`;
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
export const inputParams = z.object({ "path": z.object({ "applicationId": z.number().int().describe("ID of the application to get usage statistics.") }).optional(), "query": z.object({ "end": z.string().datetime({ offset: true }).describe("End time for query. Goes to now if not specified.").optional(), "start": z.string().datetime({ offset: true }).describe("Start time for query. Goes to 24 hours ago if not specified.").optional() }).optional() }).shape;
