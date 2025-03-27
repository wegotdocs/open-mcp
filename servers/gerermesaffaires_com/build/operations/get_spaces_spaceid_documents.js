import { z } from "zod";
export const toolName = `get_spaces_spaceid_documents`;
export const toolDescription = `Returns documents of the folder`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{spaceId}/documents`;
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
export const inputParams = z.object({ "path": z.object({ "spaceId": z.string().describe("Id of the space") }).optional(), "query": z.object({ "FullText": z.string().describe("Text to find").optional(), "Range": z.string().describe("index range of the results").optional(), "Class": z.string().describe("class of the document to find").optional() }).optional() }).shape;
