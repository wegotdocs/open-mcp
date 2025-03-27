import { z } from "zod";
export const toolName = `getjobs`;
export const toolDescription = `List instance jobs`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/jobs/{state}`;
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
export const inputParams = z.object({ "path": z.object({ "state": z.enum(["", "active", "completed", "failed", "waiting", "delayed"]).describe("The state of the job ('' for for no filter)") }).optional(), "query": z.object({ "jobType": z.enum(["activitypub-follow", "activitypub-http-broadcast", "activitypub-http-fetcher", "activitypub-http-unicast", "email", "video-transcoding", "video-file-import", "video-import", "videos-views-stats", "activitypub-refresher", "video-redundancy", "video-live-ending", "video-channel-import"]).describe("job type").optional(), "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.string().describe("Sort column").optional() }).optional() }).shape;
