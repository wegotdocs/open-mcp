import { z } from "zod";
export const toolName = `get_api_v1_users_me_videos`;
export const toolDescription = `Get videos of my user`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/me/videos`;
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
export const inputParams = z.object({ "query": z.object({ "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.string().describe("Sort column").optional() }).optional() }).shape;
