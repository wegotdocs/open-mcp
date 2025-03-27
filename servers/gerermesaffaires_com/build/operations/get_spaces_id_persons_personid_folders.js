import { z } from "zod";
export const toolName = `get_spaces_id_persons_personid_folders`;
export const toolDescription = `Returns list of folders with exceptionnal access of the person personId`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/persons/{personId}/folders`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "personId": z.string().describe("Id of the person to get folders") }).optional(), "query": z.object({ "Range": z.string().describe("index range of the results").optional() }).optional() }).shape;
