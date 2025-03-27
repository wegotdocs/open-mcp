import { z } from "zod";
export const toolName = `get_spaces_spaceid_documents_documentid_extend`;
export const toolDescription = `read the data of a document`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{spaceId}/documents/{documentId}/extend`;
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
export const inputParams = z.object({ "path": z.object({ "documentId": z.string().describe("Id of the document"), "spaceId": z.string().describe("Id of the space") }).optional() }).shape;
