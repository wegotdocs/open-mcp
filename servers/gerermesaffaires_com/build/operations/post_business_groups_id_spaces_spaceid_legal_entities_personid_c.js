import { z } from "zod";
export const toolName = `post_business_groups_id_spaces_spaceid_legal_entities_personid_c`;
export const toolDescription = `Add a Space in a group`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/business-groups/{id}/spaces/{spaceId}/legal-entities/{personId}/customers/{folderId}/spaces`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the group"), "spaceId": z.string().describe("Id of the company space which contains the customer folder"), "personId": z.string().describe("Id of the person customer"), "folderId": z.string().describe("Id of the folder customer") }).optional(), "body": z.string().optional() }).shape;
