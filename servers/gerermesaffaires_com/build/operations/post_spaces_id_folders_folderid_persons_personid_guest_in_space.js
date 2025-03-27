import { z } from "zod";
export const toolName = `post_spaces_id_folders_folderid_persons_personid_guest_in_space`;
export const toolDescription = `invite a owner in a space`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/folders/{folderId}/persons/{personId}/guest-in-space`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "folderId": z.string().describe("Id of the folder customer"), "personId": z.string().describe("Id of the person to invite to his space"), "id": z.string().describe("Id of the space") }).optional(), "body": z.object({ "PersonId": z.string().optional() }).optional() }).shape;
