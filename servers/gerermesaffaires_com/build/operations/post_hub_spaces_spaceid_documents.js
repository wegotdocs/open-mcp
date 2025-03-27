import { z } from "zod";
export const toolName = `post_hub_spaces_spaceid_documents`;
export const toolDescription = `Add a document in a space (this document is analyzed to be saved in the correct folder)`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/hub/spaces/{spaceId}/documents`;
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
export const inputParams = z.object({ "path": z.object({ "spaceId": z.string().describe("Id of the space") }).optional(), "body": z.object({ "Accounting": z.object({ "AccountedOn": z.string().optional(), "Workbook": z.enum(["customer", "provider", "bank", "cashWoucher", "fiscal", "insurance", "social", "other", "permanent"]).optional(), "YearMonth": z.string().optional() }).optional(), "Author": z.string().optional(), "Code": z.string().optional(), "Comment": z.string().optional(), "Date": z.string().optional(), "File": z.object({ "Content64Encoded": z.string().optional(), "Name": z.string().optional() }), "Title": z.string() }).optional() }).shape;
