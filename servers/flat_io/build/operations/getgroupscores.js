import { z } from "zod";
export const toolName = `getgroupscores`;
export const toolDescription = `List group's scores`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/groups/{group}/scores`;
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
export const inputParams = z.object({ "query": z.object({ "parent": z.string().describe("Filter the score forked from the score id `parent`").optional() }).optional() }).shape;
