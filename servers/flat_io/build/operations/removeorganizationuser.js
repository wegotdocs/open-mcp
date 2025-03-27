import { z } from "zod";
export const toolName = `removeorganizationuser`;
export const toolDescription = `Remove an account from Flat`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/organizations/users/{user}`;
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
export const inputParams = z.object({ "query": z.object({ "convertToIndividual": z.boolean().describe("If `true`, the account will be only removed from the organization and converted into an individual account on our public website, https://flat.io.\nThis operation will remove the education-related data from the account.\nBefore realizing this operation, you need to be sure that the user is at least 13 years old and that this one has read and agreed to the Individual Terms of Services of Flat available on https://flat.io/legal.\n").optional() }).optional() }).shape;
