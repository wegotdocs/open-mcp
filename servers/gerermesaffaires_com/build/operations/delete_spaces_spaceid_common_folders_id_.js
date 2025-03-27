import { z } from "zod";
export const toolName = `delete_spaces_spaceid_common_folders_id_`;
export const toolDescription = `Delete a common folder`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{spaceId}/common-folders/{id}`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the folder"), "spaceId": z.string().describe("Id of the space") }).optional() }).shape;
