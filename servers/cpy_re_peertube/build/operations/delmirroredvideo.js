import { z } from "zod";
export const toolName = `delmirroredvideo`;
export const toolDescription = `Delete a mirror done on a video`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/server/redundancy/videos/{redundancyId}`;
export const method = `delete`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "redundancyId": z.string().describe("id of an existing redundancy on a video") }).optional() }).shape;
