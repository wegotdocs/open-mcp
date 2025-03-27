import { z } from "zod";
export const toolName = `get_business_groups_id_`;
export const toolDescription = `Returns a group`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/business-groups/{id}`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the group") }).optional() }).shape;
