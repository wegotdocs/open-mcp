import { z } from "zod";
export const toolName = `patch_spaces_spaceid_documents_documentid_`;
export const toolDescription = `modify a doc`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{spaceId}/documents/{documentId}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "spaceId": z.string().describe("Id of the space"), "documentId": z.string().describe("Id of the document") }).optional(), "body": z.object({ "Accounting": z.object({ "AccountedOn": z.string().optional(), "Workbook": z.enum(["customer", "provider", "bank", "cashWoucher", "fiscal", "insurance", "social", "other", "permanent"]).optional(), "YearMonth": z.string().optional() }).optional(), "Author": z.string().optional(), "Code": z.string().optional(), "Comment": z.string().optional(), "Date": z.string().optional(), "Title": z.string().optional() }).optional() }).shape;
