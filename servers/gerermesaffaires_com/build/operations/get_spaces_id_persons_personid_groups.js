import { z } from "zod";
export const toolName = `get_spaces_id_persons_personid_groups`;
export const toolDescription = `Returns list of groups of the person personId`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/persons/{personId}/groups`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "personId": z.string().describe("Id of the person to get groups") }).optional() }).shape;
