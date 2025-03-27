import { z } from "zod";
export const toolName = `get_business_groups_id_spaces`;
export const toolDescription = `Returns spaces of the business group with id`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/business-groups/{id}/spaces`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the group") }).optional(), "query": z.object({ "Name": z.string().describe("Name of the space").optional(), "Type": z.enum(["private", "enterprise", "company", "association"]).describe("Type of the space").optional(), "RegistrationNumber": z.string().describe("registration number of the space").optional() }).optional() }).shape;
