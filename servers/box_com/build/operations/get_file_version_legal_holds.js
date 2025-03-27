import { z } from "zod";
export const toolName = `get_file_version_legal_holds`;
export const toolDescription = `List file version legal holds`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/file_version_legal_holds`;
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
export const inputParams = z.object({ "query": z.object({ "policy_id": z.string().describe("The ID of the legal hold policy to get the file version legal\nholds for."), "marker": z.string().describe("Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.").optional(), "limit": z.number().int().lte(1000).describe("The maximum number of items to return per page.").optional() }).optional() }).shape;
